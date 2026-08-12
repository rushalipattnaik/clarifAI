from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.auth.database import initialize_database

from app.routes.clarify import router as clarify_router
from app.routes.auth import router as auth_router
from app.routes.reports import router as reports_router


# Create FastAPI application FIRST
app = FastAPI(title="ClarifAI API")


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Initialize database
initialize_database()


# Register routers AFTER app is created
app.include_router(clarify_router)
app.include_router(auth_router)
app.include_router(reports_router)


@app.get("/")
def root():
    return {
        "message": "ClarifAI Backend Running"
    }