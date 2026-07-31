import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProject } from "../../hooks/useProject";

function ProjectInput() {
  const navigate = useNavigate();

  const { projectIdea, setProjectIdea } = useProject();

  const [loading, setLoading] = useState(false);

  function handleAnalyze() {
    if (!projectIdea.trim()) {
    alert("Please enter a project idea.");
    return;
}

    setLoading(true);

    setTimeout(() => {
      navigate("/questions");
    }, 1000);
  }

  return (
    <div className="mx-auto mt-12 max-w-4xl">
      <div className="flex gap-4">
        <input
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-6 py-4 text-white outline-none"
          placeholder="Example: Build a Smart Hospital Management System"
          value={projectIdea}
          onChange={(e) => setProjectIdea(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="rounded-xl bg-indigo-600 px-8 text-white transition hover:bg-indigo-700 disabled:opacity-60"
        >
          {loading ? "Analyzing..." : "✨ Analyze Project"}
        </button>
      </div>
    </div>
  );
}

export default ProjectInput;