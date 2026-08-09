from pydantic import BaseModel, EmailStr


class ClarifyRequest(BaseModel):

    project: str
    answers: dict


class SignupRequest(BaseModel):

    email: EmailStr
    password: str


class LoginRequest(BaseModel):

    email: EmailStr
    password: str


class TokenResponse(BaseModel):

    access_token: str
    token_type: str