
import React from "react";

function Template1({ data }) {
  return (
    <div>
      <h1>{data.personal?.name}</h1>
      <p>{data.personal?.email} | {data.personal?.phone}</p>

      <div className="resume-section">
        <h3>Bio</h3>
        <p>{data.personal?.bio}</p>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        <p>{data.education}</p>
      </div>

      <div className="resume-section">
        <h3>Experience</h3>
        <p>{data.experience}</p>
      </div>

      <div className="resume-section">
        <h3>Projects</h3>
        <p>{data.projects}</p>
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
        <p>{data.skills}</p>
      </div>

      <div className="resume-section">
        <h3>Achievements</h3>
        <p>{data.achievements}</p>
      </div>

      <div className="resume-section">
        <h3>Internships</h3>
        <p>{data.internships}</p>
      </div>
    </div>
  );
}

export default Template1;
