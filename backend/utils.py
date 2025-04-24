import models as md

from constants import *
from datetime import datetime

from schemas import Expenses
from sqlalchemy.orm import Session


def save_new_expenses(db: Session, expenses: Expenses, today_date: datetime):

    current_month = today_date.month
    current_year = today_date.year

    non_empty_expenses = expenses.dict(exclude_none=True)

    expenses_to_query = []

    for expense in non_empty_expenses:
        expenses_to_query.append(EXPENSES_CATEGORIES[expense.replace("_", "").lower()])

    # TODO: query for existing data already for the inputted expenses
    existing_expenses = (
        db.query(md.Expenses)
        .filter(
            md.Expenses.expense_month == CALENDAR_MONTHS[current_month],
            md.Expenses.expense_year == current_year,
            md.Expenses.expense_category_id.in_(expenses_to_query),
        )
        .all()
    )

    if existing_expenses:
        # existing expenses to add to
        pass
    else:
        # no existing expenses to add to
        pass
