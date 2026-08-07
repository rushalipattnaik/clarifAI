import CopyButton from "./CopyButton";
import DownloadMarkdownButton from "./DownloadMarkdownButton";
import DownloadPDFButton from "./DownloadPDFButton";
import PrintButton from "./PrintButton";

function ReportToolbar({
    report,
    onDownloadPDF,
}) {

    return (

        <div className="mb-8 flex flex-wrap gap-3">

            <CopyButton report={report} />

            <DownloadMarkdownButton report={report} />

            <DownloadPDFButton
                onDownloadPDF={onDownloadPDF}
            />

            <PrintButton />

        </div>

    );

}

export default ReportToolbar;