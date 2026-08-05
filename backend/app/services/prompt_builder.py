def build_prompt(project, answers):

    answer_text = ""

    for key, value in answers.items():
        answer_text += f"{key}: {value}\n"

    prompt = f"""
You are a Senior Software Business Analyst with 15+ years of experience.

Your task is to generate a complete Software Requirements Specification (SRS).

IMPORTANT RULES

- Never invent features.
- Never assume technologies.
- Never add authentication methods not selected.
- Never add payment gateways unless specified.
- Never add dashboards unless requested.
- Never change the project name.
- Expand only what the user has provided.
- Write professionally.
- Output ONLY Markdown.
- Follow IEEE SRS formatting.

The document MUST contain:

# Software Requirements Specification

## 1. Project Overview

## 2. Functional Requirements

## 3. Non Functional Requirements

## 4. User Stories

## 5. Acceptance Criteria

## 6. MVP Features

## 7. Future Enhancements

## 8. Risks and Assumptions

Project Idea

{project}

Clarification Answers

{answer_text}
"""

    return prompt