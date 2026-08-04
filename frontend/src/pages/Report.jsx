import { useProject } from "../hooks/useProject";

function Report() {

    const { report } = useProject();

    if (!report) {

        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
                No report generated.
            </div>
        );

    }

    return (

        <div className="min-h-screen bg-slate-950 text-white px-8 py-10">

            <div className="mx-auto max-w-5xl">

                <h1 className="text-4xl font-bold mb-8">
                    AI Generated Requirement Report
                </h1>

                <div className="rounded-xl bg-slate-900 p-8">

                    <h2 className="text-2xl font-semibold mb-3">
                        {report.project}
                    </h2>

                    <pre className="whitespace-pre-wrap leading-8">
                        {report.report}
                    </pre>

                </div>

            </div>

        </div>

    );

}

export default Report;