from fastapi import APIRouter
from app.models.schemas import ClarifyRequest
from app.services.ai_service import generate_report

router = APIRouter(
    prefix="/clarify",
    tags=["Clarify"]
)

@router.post("/")
def clarify(request: ClarifyRequest):

    report = generate_report(
        request.project,
        request.answers
    )

    return {
        "report": report
    }