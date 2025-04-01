import os

from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates

app = FastAPI()

path = os.path.abspath(os.path.expanduser("./app/templates"))
templates = Jinja2Templates(directory=path)


@app.get("/")
def homepage(request: Request):

    return templates.TemplateResponse("homepage.html", {"request": request})
