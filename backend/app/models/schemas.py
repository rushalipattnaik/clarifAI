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


class CreateReportRequest(BaseModel):
    project: str
    report: str


class ReportResponse(BaseModel):
    id: int
    project: str
    report: str
    created_at: str