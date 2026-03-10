import React, { useContext, useState } from "react";
import { ResumeContext } from "../ResumeContext";
import { useNavigate } from "react-router-dom";

function Skills() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  setResumeData({
  ...resumeData,
  skills: data
});
    navigate("/achievements");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Skills</h2>

      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter Skills details"
        rows="8"
        style={{ width: "100%" }}
      />

      <br /><br />
      <button type="submit">Next</button>
    </form>
  );
}

export default Skills;