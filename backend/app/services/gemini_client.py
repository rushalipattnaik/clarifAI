import google.generativeai as genai
from app.config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)


def generate(prompt: str):
    model = genai.GenerativeModel("gemini-flash-latest")
    response = model.generate_content(prompt)
    return response.text