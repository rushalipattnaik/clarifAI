import sqlite3

from fastapi import APIRouter, HTTPException

from app.auth.database import get_connection
from app.auth.security import (
    create_access_token,
    hash_password,
    verify_password,
)

from app.models.schemas import (
    SignupRequest,
    LoginRequest,
    TokenResponse,
)


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/signup")
def signup(request: SignupRequest):

    connection = get_connection()

    cursor = connection.cursor()

    existing_user = cursor.execute(
        "SELECT id FROM users WHERE email = ?",
        (request.email,),
    ).fetchone()

    if existing_user:

        connection.close()

        raise HTTPException(
            status_code=400,
            detail="An account with this email already exists.",
        )

    password_hashed = hash_password(request.password)

    cursor.execute(
        """
        INSERT INTO users (email, password_hash)
        VALUES (?, ?)
        """,
        (
            request.email,
            password_hashed,
        ),
    )

    connection.commit()

    user_id = cursor.lastrowid

    connection.close()

    access_token = create_access_token(user_id)

    return {
        "message": "Account created successfully.",
        "access_token": access_token,
        "token_type": "bearer",
    }


@router.post("/login", response_model=TokenResponse)
def login(request: LoginRequest):

    connection = get_connection()

    cursor = connection.cursor()

    user = cursor.execute(
        """
        SELECT id, email, password_hash
        FROM users
        WHERE email = ?
        """,
        (request.email,),
    ).fetchone()

    connection.close()

    if not user:

        raise HTTPException(
            status_code=401,
            detail="Invalid email or password.",
        )

    if not verify_password(
        request.password,
        user["password_hash"],
    ):

        raise HTTPException(
            status_code=401,
            detail="Invalid email or password.",
        )

    access_token = create_access_token(user["id"])

    return {
        "access_token": access_token,
        "token_type": "bearer",
    }