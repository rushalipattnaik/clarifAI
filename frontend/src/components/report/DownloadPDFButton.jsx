function DownloadPDFButton({
  onDownloadPDF,
  isGeneratingPDF,
}) {
  return (
    <button
      onClick={onDownloadPDF}
      disabled={isGeneratingPDF}
      className={`rounded-lg px-5 py-2 transition ${
        isGeneratingPDF
          ? "cursor-not-allowed bg-red-900 text-red-300"
          : "bg-red-600 hover:bg-red-500"
      }`}
    >
      {isGeneratingPDF ? "Generating PDF..." : "📄 PDF"}
    </button>
  );
}

export default DownloadPDFButton;