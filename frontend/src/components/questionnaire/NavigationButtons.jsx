function NavigationButtons({
  onNext,
  onPrevious,
  isLast
}) {
  return (
    <div className="mt-10 flex justify-between">

      <button
        onClick={onPrevious}
        className="rounded-lg bg-slate-700 px-6 py-3"
      >
        Previous
      </button>

      <button
        onClick={onNext}
        className="rounded-lg bg-indigo-600 px-6 py-3"
      >
        {isLast ? "Generate Report" : "Next"}
      </button>

    </div>
  );
}

export default NavigationButtons;