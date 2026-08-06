import { useProject } from "../hooks/useProject";
import MarkdownRenderer from "../components/MarkdownRenderer";

function Report() {
  const { report } = useProject();

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
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-center text-4xl font-bold">
          Software Requirements Specification
        </h1>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

          <MarkdownRenderer content={report} />

        </div>

      </div>

    </div>
  );
}

export default Report;