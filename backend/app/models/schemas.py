from pydantic import BaseModel

class ClarifyRequest(BaseModel):

    project: str

    answers: dict