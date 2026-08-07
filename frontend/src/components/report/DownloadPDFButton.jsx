function DownloadPDFButton({ onDownloadPDF }) {
  return (
    <button
      onClick={onDownloadPDF}
      className="rounded-lg bg-red-600 px-5 py-2 transition hover:bg-red-500"
    >
      📄 PDF
    </button>
  );
}

export default DownloadPDFButton;