from fastapi import APIRouter

from app.models.request_models import ClarifyRequest

from app.services.ai_service import generate_report

router = APIRouter(
    prefix="/clarify",
    tags=["Clarification"]
)


@router.post("/")
def clarify(request: ClarifyRequest):

    return generate_report(
        request.project,
        request.answers
    )