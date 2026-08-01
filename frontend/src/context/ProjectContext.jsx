import { createContext, useState } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projectIdea, setProjectIdea] = useState("");

  const [answers, setAnswers] = useState({});

  return (
    <ProjectContext.Provider
      value={{
        projectIdea,
        setProjectIdea,
        answers,
        setAnswers,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}