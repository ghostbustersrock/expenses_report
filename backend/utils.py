import datetime
import models as md

from constants import *
from sqlalchemy import and_, func
from sqlalchemy.orm import Session


def get_current_month_and_year():
    today_date = datetime.datetime.now()
    current_month = CALENDAR_MONTHS[today_date.month]
    current_year = today_date.year

    return current_month, current_year


def create_expenses_submitted_summary(msg: str, expenses: list[dict]) -> str:

    for expense in expenses:
        category = list(expense.keys())[0].replace("_", " ")
        cost = list(expense.values())[0]

        msg += f"{category.title()}: £{cost}\n"

    return msg


def get_expense_from_db(db: Session, expense_category: str):

    current_month, current_year = get_current_month_and_year()

    query_expense = (
        db.query(md.Expenses)
        .filter(
            md.Expenses.expense_month == current_month,
            md.Expenses.expense_year == current_year,
            md.Expenses.expense_category_id
            == EXPENSES_CATEGORIES[expense_category.replace("_", " ").lower()],
        )
        .first()
    )

    return query_expense


def currently_available_expense_categories(db: Session, expenses):

    available_expenses = []
    non_available_expenses = []

    for expense_category, transaction in expenses.items():

        query_expense = get_expense_from_db(db=db, expense_category=expense_category)

        if query_expense:
            available_expenses.append({expense_category: transaction})
        else:
            non_available_expenses.append({expense_category: transaction})

    return available_expenses, non_available_expenses


def save_category_expense_not_available_on_db(
    db: Session, expenses: list[dict], operation: str
):

    current_month, current_year = get_current_month_and_year()

    expenses_not_saved = []

    for expense in expenses:

        expense_category = list(expense.keys())[0]
        expense_cost = list(expense.values())[0]

        if operation == "add":
            db.add(
                md.Expenses(
                    expense_month=current_month,
                    expense_year=current_year,
                    expense_cost=expense_cost,
                    expense_category_id=EXPENSES_CATEGORIES[
                        expense_category.replace("_", " ").lower()
                    ],
                )
            )
            db.flush()

        else:
            expenses_not_saved.append(expense)

    db.commit()

    return expenses_not_saved


def save_category_expense_available_on_db(
    db: Session, expenses: list[dict], operation: str
):

    for expense in expenses:

        expense_category = list(expense.keys())[0]
        expense_cost = list(expense.values())[0]

        existing_expense = get_expense_from_db(db=db, expense_category=expense_category)

        expense_cost_to_update = float(existing_expense.expense_cost)

        if operation == "add":
            existing_expense.expense_cost = expense_cost_to_update + expense_cost
        else:

            removal_transaction = expense_cost_to_update - expense_cost

            if removal_transaction == 0:
                db.delete(existing_expense)
            else:
                existing_expense.expense_cost = removal_transaction

        db.flush()

    db.commit()


def get_current_month_expenses_breakdown(db: Session, today_date: datetime) -> dict:

    current_month = CALENDAR_MONTHS[today_date.month]
    current_year = today_date.year

    expense_query = (
        db.query(
            md.ExpensesCategories.category_id,
            md.ExpensesCategories.category_type,
            func.coalesce(func.sum(md.Expenses.expense_cost), 0),
        )
        .outerjoin(
            md.Expenses,
            and_(
                md.Expenses.expense_category_id == md.ExpensesCategories.category_id,
                md.Expenses.expense_month == current_month,
                md.Expenses.expense_year == current_year,
            ),
        )
        .group_by(
            md.ExpensesCategories.category_id, md.ExpensesCategories.category_type
        )
    )

    rows = expense_query.all()

    expenses_breakdown = {
        category_id: {
            "category": category_type,
            "total_expense": expense_total,
        }
        for category_id, category_type, expense_total in sorted(
            rows, key=lambda r: r[0]
        )
    }

    return expenses_breakdown


def get_current_month_total_spendings(db: Session) -> float | None:

    current_month, current_year = get_current_month_and_year()

    total_month_expenses = (
        db.query(func.sum(md.Expenses.expense_cost)).filter(
            md.Expenses.expense_month == current_month,
            md.Expenses.expense_year == current_year,
        )
    ).first()[0]

    if total_month_expenses:
        total_month_expenses = round(float(total_month_expenses), 2)
    else:
        total_month_expenses = 0

    return total_month_expenses
