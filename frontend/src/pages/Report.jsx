import { useProject } from "../hooks/useProject";

function Report() {

  const { report } = useProject();

  if (!report) {

    return (

      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">

        No report generated.

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-slate-950 p-10 text-white">

      <h1 className="mb-8 text-4xl font-bold">

        ClarifAI Report

      </h1>

      <div className="rounded-xl bg-slate-900 p-8">

        <h2 className="mb-4 text-2xl">

          Project

        </h2>

        <p className="mb-6 text-indigo-400">

          {report.project}

        </p>

        <h2 className="mb-4 text-2xl">

          Generated Prompt

        </h2>

        <pre className="overflow-auto rounded-lg bg-slate-800 p-6 whitespace-pre-wrap">

        {report.prompt}

        </pre>

        <div className="mt-8 rounded-lg bg-green-700 p-4">

          ✅ Prompt Builder Ready

        </div>

      </div>

    </div>

  );

}

export default Report;