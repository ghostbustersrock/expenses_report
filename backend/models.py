from backend.database import Base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, INTEGER, TEXT, DATE, NUMERIC, ForeignKey
from sqlalchemy.orm import relationship


class Expenses(Base):
    __tablename__ = "expenses"

    id = Column(INTEGER, primary_key=True, index=True)
    expense_category_id = Column(
        INTEGER, ForeignKey("expenses_categories.category_id"), nullable=False
    )
    expense_month = Column(NUMERIC, nullable=False)
    expense_year = Column(NUMERIC, nullable=False)
    expense_cost = Column(NUMERIC, nullable=False)


class ExpensesCategories(Base):
    __tablename__ = "expenses_categories"

    category_id = Column(INTEGER, primary_key=True, index=True)
    category_type = Column(TEXT, nullable=False)


class ExpensesLogs(Base):
    __tablename__ = "expenses_logs"

    id = Column(INTEGER, primary_key=True, index=True)
    expense_type = Column(TEXT, nullable=False)
    expense_amount = Column(NUMERIC, nullable=False)
    expense_category = Column(TEXT, nullable=False)
    date_of_entry = Column(DATE, nullable=False)
