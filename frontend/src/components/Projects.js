import React, { useContext, useState } from "react";
import { ResumeContext } from "../ResumeContext";
import { useNavigate } from "react-router-dom";

function Projects() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   setResumeData({
  ...resumeData,
  projects: data
});
    navigate("/skills");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Projects</h2>

      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter Projects details"
        rows="8"
        style={{ width: "100%" }}
      />

      <br /><br />
      <button type="submit">Next</button>
    </form>
  );
}

export default Projects;