from fastapi import APIRouter, Depends, HTTPException

from app.auth.database import get_connection
from app.auth.dependencies import get_current_user
from app.models.schemas import CreateReportRequest


router = APIRouter(
    prefix="/reports",
    tags=["Reports"],
)


@router.post("/")
def create_report(
    request: CreateReportRequest,
    user_id: int = Depends(get_current_user),
):
    connection = get_connection()

    try:
        cursor = connection.cursor()

        cursor.execute(
            """
            INSERT INTO reports (user_id, project, report)
            VALUES (?, ?, ?)
            """,
            (
                user_id,
                request.project,
                request.report,
            ),
        )

        connection.commit()

        report_id = cursor.lastrowid

        return {
            "message": "Report saved successfully.",
            "report_id": report_id,
        }

    finally:
        connection.close()


@router.get("/")
def get_reports(
    user_id: int = Depends(get_current_user),
):
    connection = get_connection()

    try:
        cursor = connection.cursor()

        reports = cursor.execute(
            """
            SELECT id, project, created_at
            FROM reports
            WHERE user_id = ?
            ORDER BY created_at DESC
            """,
            (user_id,),
        ).fetchall()

        return {
            "reports": [
                {
                    "id": report["id"],
                    "project": report["project"],
                    "created_at": report["created_at"],
                }
                for report in reports
            ]
        }

    finally:
        connection.close()


@router.get("/{report_id}")
def get_report(
    report_id: int,
    user_id: int = Depends(get_current_user),
):
    connection = get_connection()

    try:
        cursor = connection.cursor()

        report = cursor.execute(
            """
            SELECT id, project, report, created_at
            FROM reports
            WHERE id = ?
            AND user_id = ?
            """,
            (
                report_id,
                user_id,
            ),
        ).fetchone()

        if not report:
            raise HTTPException(
                status_code=404,
                detail="Report not found.",
            )

        return {
            "id": report["id"],
            "project": report["project"],
            "report": report["report"],
            "created_at": report["created_at"],
        }

    finally:
        connection.close()