
import React, { createContext, useState } from "react";
 

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    personal: {},
    education: "",
    experience: "",
    projects: "",
    skills: "",
    achievements: "",
    internships:"",
 
    template: "template1"
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};
