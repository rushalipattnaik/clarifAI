import { createContext, useState } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projectIdea, setProjectIdea] = useState("");
  const [answers, setAnswers] = useState({});
  const [report, setReport] = useState(null);

  return (
    <ProjectContext.Provider
      value={{
        projectIdea,
        setProjectIdea,
        answers,
        setAnswers,
        report,
        setReport,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}