import { useState } from "react";

function ProjectInput() {
  const [projectIdea, setProjectIdea] = useState("");

  const handleAnalyze = () => {
    if (!projectIdea.trim()) {
      alert("Please enter a project idea.");
      return;
    }

    console.log(projectIdea);
  };

  return (
    <div className="mx-auto mt-12 max-w-4xl">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Example: Build a Smart Hospital Management System"
          value={projectIdea}
          onChange={(e) => setProjectIdea(e.target.value)}
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-6 py-4 text-white outline-none transition focus:border-indigo-500"
        />

        <button
          onClick={handleAnalyze}
          className="rounded-xl bg-indigo-600 px-8 font-medium text-white transition hover:bg-indigo-700"
        >
          ✨ Analyze Project
        </button>
      </div>
    </div>
  );
}

export default ProjectInput;