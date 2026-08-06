import re


def clean_markdown(markdown: str):

    if markdown is None:
        return ""

    markdown = markdown.replace("\r\n", "\n")

    markdown = re.sub(r"\n{3,}", "\n\n", markdown)

    markdown = markdown.strip()

    return markdown