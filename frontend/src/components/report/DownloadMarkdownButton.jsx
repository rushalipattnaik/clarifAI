import { downloadMarkdown } from "../../utils/downloadMarkdown";

function DownloadMarkdownButton({ report }) {

    return (

        <button

            onClick={() => downloadMarkdown(report)}

            className="rounded-lg bg-green-600 px-5 py-2 hover:bg-green-500"

        >

            ⬇ Markdown

        </button>

    );

}

export default DownloadMarkdownButton;