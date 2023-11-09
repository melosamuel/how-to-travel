from fastapi import FastAPI, Request
from starlette.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

templates = Jinja2Templates(directory="app/Templates")

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"))

@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/flights/")
@app.post("/flights/")
def flights(request: Request):
    return templates.TemplateResponse("flights.html", {"request": request})