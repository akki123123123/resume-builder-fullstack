
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResumeProvider } from "./ResumeContext";

import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
 
import ResumePreview from "./components/ResumePreview";
 import "./App.css";
import Internships from "./components/Internship";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <ResumeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
        <Route path="/internships" element= {<Internships/>}/>
          <Route path="/preview" element={<ResumePreview />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ResumeProvider>
  );
}

export default App;
