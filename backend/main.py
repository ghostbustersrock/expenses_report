import datetime
import models as md
import os

from fastapi import FastAPI, Request, Depends
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session

from fastapi.middleware.cors import CORSMiddleware
from database import get_db
from schemas import Expenses
from utils import save_new_expenses

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
    print(expenses)

    return {"status": "SUCCESS"}


@app.get("/spendings/current-month")
async def homepage(request: Request, db: Session = Depends(get_db)):
    expenses = db.query(md.ExpensesCategories).all()
    print(expenses)

    return {"total_spent": 600}


@app.post("/submit-expenses")
async def submit_expenses(
    expenses: Expenses, db: Session = Depends(get_db), operation: str = None
):
    print(f"Expenses - {expenses}")
    print(f"Operation - {operation}")
    today_date = datetime.datetime.now()
    save_new_expenses(db=db, expenses=expenses, today_date=today_date)
    return {"message": "Expenses submitted with success"}
