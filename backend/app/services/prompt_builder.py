def build_prompt(project, answers):
    prompt = f"""
You are an experienced Software Business Analyst.

Your task is to convert the following project idea into a professional Software Requirements Specification.

Project Name:
{project}

User Responses:
"""

    for key, value in answers.items():
        prompt += f"\nQuestion {key}: {value}"

    prompt += """

Generate the following sections:

1. Project Overview

2. Functional Requirements

3. Non-Functional Requirements

4. User Stories

5. Acceptance Criteria

6. MVP Features

7. Future Enhancements

8. Risks and Assumptions

Respond in Markdown format.
"""

    return prompt