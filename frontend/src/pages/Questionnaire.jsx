import { useProject } from "../hooks/useProject";

function Questionnaire() {
  const { projectIdea } = useProject();

  return (
    <div className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="text-4xl font-bold">Clarification Questions</h1>

      <p className="mt-6 text-xl">
        Project:
        <span className="ml-3 text-indigo-400">
          {projectIdea}
        </span>
      </p>
    </div>
  );
}

export default Questionnaire;