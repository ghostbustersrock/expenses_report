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
    create_expenses_submitted_summary,
    currently_available_expense_categories,
    get_current_month_expenses_breakdown,
    get_current_month_total_spendings,
    save_category_expense_available_on_db,
    save_category_expense_not_available_on_db,
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


@app.get("/")
async def homepage(request: Request, db: Session = Depends(get_db)):
    expenses = db.query(md.ExpensesCategories).all()

    return {"status": "SUCCESS"}


@app.post("/submit-expenses")
async def submit_expenses(
    expenses: Expenses, db: Session = Depends(get_db), operation: str = None
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


@app.get("/spendings/current-month")
async def homepage(request: Request, db: Session = Depends(get_db)):

    total_month_expense = get_current_month_total_spendings(db=db)

    return {"total_spent": total_month_expense}


@app.get("/current-month-expenses-breakdown")
async def current_month_expenses_breakdown(db: Session = Depends(get_db)):

    today_date = datetime.datetime.now()

    expenses_breakdown = get_current_month_expenses_breakdown(
        db=db, today_date=today_date
    )

    return expenses_breakdown


# TODO: endpoint to delete all current inputs for the month

# TODO: later on introduce a feature where when selecting a specific
# past month, we pass this argument to all the API endpoints,
# so any operations we do take place on the currently selected month.
# This is in the eventuality that we need to modify a past month. The default
# month is the current one we are in, if nothing is selected.

# TODO: add logic in utils.py to save any new input (update, delete, etc.)
# to a logger table so that it can be displayed in the frontend!

# TODO: upon hitting the submit button and passing the alert()
# the components need to refresh on their own so that we get the latest
# data, rather than having to refresh the page manually!
# InputExpenses needs to refresh the CurrentTotalMonthSpendings component
