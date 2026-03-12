import React, { useContext, useState } from "react";
import { ResumeContext } from "../ResumeContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Achievements() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   setResumeData({
  ...resumeData,
  achievements: data
});
    navigate("/internships");
  };

  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Achievements</h2>

      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter Achievements details"
        rows="8"
        style={{ width: "100%" }}
      />

      <br /><br />
      <button type="submit">Next</button>
    </form>
    </>
  );
}

export default Achievements;