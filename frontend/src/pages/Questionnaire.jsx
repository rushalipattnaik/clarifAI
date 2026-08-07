import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

import { questions } from "../data/questions";

import ProgressBar from "../components/questionnaire/ProgressBar";
import QuestionCard from "../components/questionnaire/QuestionCard";
import NavigationButtons from "../components/questionnaire/NavigationButtons";

import { useProject } from "../hooks/useProject";

function Questionnaire() {

  const navigate = useNavigate();

  const {
    projectIdea,
    answers,
    setAnswers,
    setReport,
} = useProject();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);

  function selectAnswer(answer) {

    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: answer,
    });

  }

  async function nextQuestion() {

  const id = questions[currentQuestion].id;

  if (!answers[id]) {
    alert("Please select an answer.");
    return;
  }

  if (currentQuestion === questions.length - 1) {

    try {

      setLoading(true);

        const response = await api.post("/clarify/", {
    project: projectIdea,
    answers: answers,
});

setReport(response.data.report);

navigate("/report");

    } catch (error) {

  console.error("FULL ERROR:", error);

  if (error.response) {
    console.error("Response Data:", error.response.data);
    console.error("Status:", error.response.status);
    alert(JSON.stringify(error.response.data, null, 2));
  } else {
    alert(error.message);
  }

}
    finally{

    setLoading(false);

}

    return;

  }

  setCurrentQuestion(currentQuestion + 1);

}
function previousQuestion() {
  if (currentQuestion > 0) {
    setCurrentQuestion(currentQuestion - 1);
  }
}

  return (

    <div className="min-h-screen bg-slate-950 px-8 py-12 text-white">

      <div className="mx-auto max-w-3xl">

        <h1 className="mb-3 text-4xl font-bold">

          Clarify Your Requirements

        </h1>

        <p className="mb-10 text-slate-400">

          Project:

          <span className="ml-2 text-indigo-400">

            {projectIdea}

          </span>

        </p>

        <ProgressBar
          current={currentQuestion + 1}
          total={questions.length}
        />

        <QuestionCard

          question={questions[currentQuestion]}

          selectedAnswer={
            answers[questions[currentQuestion].id]
          }

          onSelect={selectAnswer}

        />

        <NavigationButtons
          onNext={nextQuestion}
          onPrevious={previousQuestion}
          isFirst={currentQuestion === 0}
          isLast={currentQuestion === questions.length - 1}
          loading={loading}
  />

      </div>

    </div>

  );

}

export default Questionnaire;