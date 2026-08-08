import CopyButton from "./CopyButton";
import DownloadMarkdownButton from "./DownloadMarkdownButton";
import DownloadPDFButton from "./DownloadPDFButton";
import PrintButton from "./PrintButton";

function ReportToolbar({
  report,
  onDownloadPDF,
  isGeneratingPDF,
}) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">

      <CopyButton report={report} />

      <DownloadMarkdownButton report={report} />

      <DownloadPDFButton
        onDownloadPDF={onDownloadPDF}
        isGeneratingPDF={isGeneratingPDF}
      />

      <PrintButton />

    </div>
  );
}

export default ReportToolbar;