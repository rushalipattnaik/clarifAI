import { examples } from "../../data/examples";
import { useProject } from "../../hooks/useProject";

function QuickExamples() {
  const { setProjectIdea } = useProject();

  return (
    <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-4">
      {examples.map((item) => (
        <button
          key={item}
          onClick={() => setProjectIdea(item)}
          className="rounded-full border border-slate-700 px-5 py-2 text-slate-300 transition hover:border-indigo-500 hover:text-white"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default QuickExamples;