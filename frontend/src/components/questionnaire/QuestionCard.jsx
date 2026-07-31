function QuestionCard({
  question,
  selectedAnswer,
  onSelect
}) {
  return (
    <div className="rounded-xl bg-slate-900 p-8">

      <h2 className="mb-8 text-2xl font-bold">

        {question.question}

      </h2>

      <div className="space-y-4">

        {question.options.map((option) => (

          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`block w-full rounded-lg border p-4 text-left transition

            ${
              selectedAnswer === option

                ? "border-indigo-500 bg-indigo-600"

                : "border-slate-700 hover:border-indigo-500"
            }
            `}
          >
            {option}
          </button>

        ))}

      </div>

    </div>
  );
}

export default QuestionCard;