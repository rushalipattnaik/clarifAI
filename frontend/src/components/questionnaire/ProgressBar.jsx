function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-10">

      <div className="mb-2 flex justify-between">

        <span className="text-slate-300">

          Question {current} of {total}

        </span>

        <span>{Math.round(percentage)}%</span>

      </div>

      <div className="h-3 rounded-full bg-slate-800">

        <div
          style={{ width: `${percentage}%` }}
          className="h-3 rounded-full bg-indigo-500 transition-all duration-500"
        />

      </div>

    </div>
  );
}

export default ProgressBar;