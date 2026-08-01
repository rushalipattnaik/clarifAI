from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.clarify import router as clarify_router

app = FastAPI(title="ClarifAI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(clarify_router)

@app.get("/")
def root():
    return {
        "message": "ClarifAI Backend Running"
    }