from app.services.prompt_builder import build_prompt
from app.services.gemini_client import generate_text
from app.services.formatter import clean_markdown


def generate_report(project, answers):

    prompt = build_prompt(project, answers)

    response = generate_text(prompt)

    return clean_markdown(response)