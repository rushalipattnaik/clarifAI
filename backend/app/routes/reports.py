import json

from fastapi import APIRouter, Depends, HTTPException

from app.auth.database import get_connection
from app.auth.dependencies import get_current_user_id

from app.models.schemas import (
    CreateReportRequest,
    ReportResponse,
)


router = APIRouter(
    prefix="/reports",
    tags=["Reports"],
)


@router.post("/", response_model=ReportResponse)
def create_report(
    request: CreateReportRequest,
    user_id: int = Depends(get_current_user_id),
):

    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(
        """
        INSERT INTO reports (
            user_id,
            project,
            answers,
            report
        )
        VALUES (?, ?, ?, ?)
        """,
        (
            user_id,
            request.project,
            json.dumps(request.answers),
            request.report,
        ),
    )

    connection.commit()

    report_id = cursor.lastrowid

    row = cursor.execute(
        """
        SELECT
            id,
            project,
            answers,
            report,
            created_at
        FROM reports
        WHERE id = ?
        AND user_id = ?
        """,
        (
            report_id,
            user_id,
        ),
    ).fetchone()

    connection.close()

    return {
        "id": row["id"],
        "project": row["project"],
        "answers": json.loads(row["answers"]),
        "report": row["report"],
        "created_at": row["created_at"],
    }


@router.get("/", response_model=list[ReportResponse])
def get_reports(
    user_id: int = Depends(get_current_user_id),
):

    connection = get_connection()

    cursor = connection.cursor()

    rows = cursor.execute(
        """
        SELECT
            id,
            project,
            answers,
            report,
            created_at
        FROM reports
        WHERE user_id = ?
        ORDER BY created_at DESC
        """,
        (user_id,),
    ).fetchall()

    connection.close()

    return [
        {
            "id": row["id"],
            "project": row["project"],
            "answers": json.loads(row["answers"]),
            "report": row["report"],
            "created_at": row["created_at"],
        }
        for row in rows
    ]


@router.get("/{report_id}", response_model=ReportResponse)
def get_report(
    report_id: int,
    user_id: int = Depends(get_current_user_id),
):

    connection = get_connection()

    cursor = connection.cursor()

    row = cursor.execute(
        """
        SELECT
            id,
            project,
            answers,
            report,
            created_at
        FROM reports
        WHERE id = ?
        AND user_id = ?
        """,
        (
            report_id,
            user_id,
        ),
    ).fetchone()

    connection.close()

    if not row:
        raise HTTPException(
            status_code=404,
            detail="Report not found.",
        )

    return {
        "id": row["id"],
        "project": row["project"],
        "answers": json.loads(row["answers"]),
        "report": row["report"],
        "created_at": row["created_at"],
    }