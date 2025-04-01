from core.db.database import Base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String


class User(Base):
    __tablename__ = "test_table"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(
        String,
    )
    last_name = Column(String)
    age = Column(Integer)
