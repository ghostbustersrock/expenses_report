import datetime
import models as md
import os

from constants import *
from fastapi import FastAPI, Request, Depends
from fastapi.templating import Jinja2Templates
from sqlalchemy import func
from sqlalchemy.orm import Session

from fastapi.middleware.cors import CORSMiddleware
from database import get_db
from schemas import Expenses
from utils import (
    all_time_categories_spendings,
    create_expenses_submitted_summary,
    currently_available_expense_categories,
    logs_from_selected_date,
    get_spendings_dates,
    save_category_expense_available_on_db,
    save_category_expense_not_available_on_db,
    selected_date_expenses_breakdown,
    selected_date_total_spendings,
    total_category_spendings_per_month,
    total_spendings_per_month,
)

app = FastAPI()

origins = ["http://localhost:5173", "locahost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

path = os.path.abspath(os.path.expanduser("./app/templates"))
templates = Jinja2Templates(directory=path)


@app.post("/submit-expenses")
async def submit_expenses(
    expenses: Expenses,
    db: Session = Depends(get_db),
    operation: str = None,
):

    non_empty_expenses = expenses.dict(exclude_none=True)

    available_expenses, non_available_expenses = currently_available_expense_categories(
        db=db, expenses=non_empty_expenses
    )

    operation_renamed = "added" if operation == "add" else "removed"

    if available_expenses:
        save_category_expense_available_on_db(
            db=db, expenses=available_expenses, operation=operation
        )

    expenses_not_saved = []

    if non_available_expenses:
        expenses_not_saved = save_category_expense_not_available_on_db(
            db=db, expenses=non_available_expenses, operation=operation
        )

    if expenses_not_saved:
        msg = create_expenses_submitted_summary(
            msg=f"All your expenses were {operation_renamed}, besides from the below ones, as you're trying to remove expenses from categories you haven't previously logged anything to.\n\n",
            expenses=expenses_not_saved,
        )
    else:
        msg = create_expenses_submitted_summary(
            msg=f"Expense(s) {operation_renamed} with success\n\n",
            expenses=available_expenses,
        )

    return {"message": msg}


@app.get("/get-total-spendings")
async def get_total_spendings(db: Session = Depends(get_db), selected_date: str = None):

    selected_date_split = selected_date.split("-")
    month = int(selected_date_split[0])
    year = int(selected_date_split[1])

    total_month_expense = selected_date_total_spendings(db=db, month=month, year=year)

    return total_month_expense


@app.get("/get-expenses-breakdown")
async def get_expenses_breakdown(
    db: Session = Depends(get_db), selected_date: str = None
):

    selected_date_split = selected_date.split("-")
    month = int(selected_date_split[0])
    year = int(selected_date_split[1])

    expenses_breakdown = selected_date_expenses_breakdown(db=db, month=month, year=year)

    return expenses_breakdown


@app.get("/get-spendings-dates")
async def spendings_dates(db: Session = Depends(get_db)):
    unique_spendings_dates = get_spendings_dates(db=db)

    return unique_spendings_dates


@app.get("/get-logs")
async def get_logs(db: Session = Depends(get_db), selected_date: str = None):

    selected_date_split = selected_date.split("-")
    month = int(selected_date_split[0])
    year = int(selected_date_split[1])

    logs = logs_from_selected_date(db=db, month=month, year=year)

    return logs


@app.get("/get-total-spendings-per-month")
async def get_total_spendings_per_month(db: Session = Depends(get_db)):

    spendings_per_month = total_spendings_per_month(db=db)

    return spendings_per_month


@app.get("/get-category-spendings-per-month")
async def get_total_spendings_per_month(
    db: Session = Depends(get_db), category: str = None
):

    category_spendings = total_category_spendings_per_month(db=db, category=category)

    return category_spendings


@app.get("/get-all-time-categories-spendings")
async def get_all_time_categories_spendings(db: Session = Depends(get_db)):

    all_categories_spendings = all_time_categories_spendings(db=db)

    return all_categories_spendings


# TODO: endpoint to delete all current inputs for the month
