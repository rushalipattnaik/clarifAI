def clean_markdown(text):

    if not text:
        return ""

    text = text.replace("\r\n", "\n")

    while "\n\n\n" in text:
        text = text.replace("\n\n\n", "\n\n")

    return text.strip()