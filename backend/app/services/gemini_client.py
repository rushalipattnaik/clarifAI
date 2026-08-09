from google import genai

from app.config import GEMINI_API_KEY, GEMINI_MODEL


client = genai.Client(
    api_key=GEMINI_API_KEY
)


def generate_text(prompt: str):

    try:

        response = client.models.generate_content(
            model=GEMINI_MODEL,
            contents=prompt,
        )

        if not response.text:
            raise RuntimeError("Gemini returned an empty response.")

        return response.text

    except Exception as e:

        raise RuntimeError(
            f"Gemini API generation failed: {str(e)}"
        ) from e