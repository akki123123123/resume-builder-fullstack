
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResumeProvider } from "./ResumeContext";

 
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Achievements from "./components/Achievements.jsx";
 
import ResumePreview from "./components/ResumePreview.jsx";
 import "./App.css";
import Internships from "./components/Internship.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Logout from "./components/Logout.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";


function App() {
  return (
    <ResumeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<PersonalInfo />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
        <Route path="/internships" element= {<Internships/>}/>
          <Route path="/preview" element={<ResumePreview />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ResumeProvider>
  );
}

export default App;
