export function downloadMarkdown(report) {

    const blob = new Blob(

        [report],

        { type: "text/markdown" }

    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "ClarifAI_SRS.md";

    a.click();

    URL.revokeObjectURL(url);

}