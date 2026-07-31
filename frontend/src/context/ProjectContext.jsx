import { createContext, useState } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projectIdea, setProjectIdea] = useState("");

  return (
    <ProjectContext.Provider
      value={{
        projectIdea,
        setProjectIdea,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}