function NavigationButtons({
  onNext,
  onPrevious,
  isLast,
  isFirst,
  isGenerating,
}) {
  return (
    <div className="mt-10 flex justify-between">

      <button
        onClick={onPrevious}
        disabled={isFirst || isGenerating}
        className={`rounded-lg px-6 py-3 transition ${
          isFirst || isGenerating
            ? "cursor-not-allowed bg-slate-800 text-slate-500"
            : "bg-slate-700 hover:bg-slate-600"
        }`}
      >
        Previous
      </button>

      <button
        onClick={onNext}
        disabled={isGenerating}
        className={`rounded-lg px-6 py-3 transition ${
          isGenerating
            ? "cursor-not-allowed bg-indigo-900 text-indigo-300"
            : "bg-indigo-600 hover:bg-indigo-500"
        }`}
      >
        {isGenerating
          ? "Generating SRS..."
          : isLast
          ? "Generate Report"
          : "Next"}
      </button>

    </div>
  );
}

export default NavigationButtons;