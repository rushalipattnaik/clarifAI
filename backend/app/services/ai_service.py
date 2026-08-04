from app.services.prompt_builder import build_prompt
from app.services.gemini_client import generate


def generate_report(project, answers):

    prompt = build_prompt(
        project,
        answers
    )

    ai_response = generate(prompt)

    return {
        "project": project,
        "report": ai_response
    }