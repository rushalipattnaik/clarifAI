from fastapi import APIRouter

from app.models.request_models import ClarifyRequest

router = APIRouter(
    prefix="/clarify",
    tags=["Clarification"]
)

@router.post("/")
def clarify(request: ClarifyRequest):

    return {

        "project": request.project,

        "answers": request.answers,

        "status": "received"

    }