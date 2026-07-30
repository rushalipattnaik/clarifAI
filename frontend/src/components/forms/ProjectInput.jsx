import { useState } from "react";

function ProjectInput() {

  const [idea, setIdea] = useState("");

  const handleAnalyze = () => {

    console.log(idea);

  };

  return (

    <div className="mx-auto mt-12 flex max-w-3xl gap-4">

      <input

        type="text"

        placeholder="Example: Build a Smart Hospital Management System"

        value={idea}

        onChange={(e) => setIdea(e.target.value)}

        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none"

      />

      <button

        onClick={handleAnalyze}

        className="rounded-xl bg-indigo-600 px-8 text-white transition hover:bg-indigo-700"

      >

        Analyze

      </button>

    </div>

  );
}

export default ProjectInput;