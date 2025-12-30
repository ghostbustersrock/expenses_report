from pydantic import BaseModel, Field
from typing import Optional


class Expenses(BaseModel):
    rent: Optional[float]
    bills: Optional[float]
    transportation: Optional[float]
    subscriptions: Optional[float]
    groceries: Optional[float]
    shopping: Optional[float]
    eating_out: Optional[float] = Field(alias="eatingOut")
    leisure: Optional[float]
    drinks: Optional[float]
    holidays: Optional[float]
    other: Optional[float]

    class Config:
        allow_population_by_field_name = True
