function NavigationButtons({
  onNext,
  onPrevious,
  isLast,
  isFirst,
}) {
  return (
    <div className="mt-10 flex justify-between">

      <button
        onClick={onPrevious}
        disabled={isFirst}
        className={`rounded-lg px-6 py-3 transition ${
          isFirst
            ? "cursor-not-allowed bg-slate-800 text-slate-500"
            : "bg-slate-700 hover:bg-slate-600"
        }`}
      >
        Previous
      </button>

      <button
        onClick={onNext}
        className="rounded-lg bg-indigo-600 px-6 py-3 hover:bg-indigo-500 transition"
      >
        {isLast ? "Generate Report" : "Next"}
      </button>

    </div>
  );
}

export default NavigationButtons;