from fastapi import APIRouter

from app.models.request_models import ClarifyRequest
from app.services.ai_service import generate_mock_report

router = APIRouter(
    prefix="/clarify",
    tags=["Clarification"]
)


@router.post("/")
def clarify(request: ClarifyRequest):

    report = generate_mock_report(
        request.project,
        request.answers
    )

    return report