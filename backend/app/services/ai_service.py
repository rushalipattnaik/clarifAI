from app.services.prompt_builder import build_prompt


def generate_mock_report(project, answers):
    prompt = build_prompt(project, answers)

    return {
        "project": project,
        "prompt": prompt,
        "status": "ready_for_ai"
    }