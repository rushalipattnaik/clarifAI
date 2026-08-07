import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useRef } from "react";

import { useProject } from "../hooks/useProject";

import MarkdownRenderer from "../components/MarkdownRenderer";

import ReportHeader from "../components/report/ReportHeader";
import ReportToolbar from "../components/report/ReportToolbar";

function Report() {

    const { report } = useProject();
    const reportRef = useRef(null);

    const downloadPDF = async () => {const downloadPDF = async () => {

    console.log("PDF function started");

    try {

        console.log(reportRef.current);

        if (!reportRef.current) {
            alert("reportRef is null");
            return;
        }

        alert("PDF generation started");

        const canvas = await html2canvas(reportRef.current);

        alert("Canvas generated");

        const pdf = new jsPDF();

        pdf.text("Test PDF", 10, 10);

        pdf.save("test.pdf");

    } catch (err) {

        console.error(err);

        alert(err.message);

    }
};

    const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        useCORS: true,
        scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;

    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;

    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

    heightLeft -= pdfHeight;

    while (heightLeft > 0) {

        position = heightLeft - imgHeight;

        pdf.addPage();

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

        heightLeft -= pdfHeight;
    }

    pdf.save("ClarifAI-SRS.pdf");

};

    if (!report) {

        return (

            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">

                <div className="rounded-xl bg-slate-900 p-8 shadow-lg">

                    <h2 className="text-2xl font-bold text-red-400">

                        No Report Available

                    </h2>

                    <p className="mt-4 text-slate-300">

                        Please complete the questionnaire first.

                    </p>

                </div>

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-950 py-10 px-6 text-white">

            <div className="mx-auto max-w-6xl">

                <ReportHeader />

                  <ReportToolbar

                      report={report}

                      onDownloadPDF={downloadPDF}

                  />

                <div

                    ref={reportRef}

                    className="rounded-xl border border-slate-700 bg-slate-900 p-8 shadow-2xl"

                >

                    <MarkdownRenderer content={report} />

                </div>

            </div>

        </div>

    );

}

export default Report;