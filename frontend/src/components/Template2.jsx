
import React from "react";

function Template2({ data }) {
  return (
    <div style={{border:"2px solid black", padding:"15px"}}>
      <h2>{data.personal?.name}</h2>
      <p>{data.personal?.email}</p>
      <hr/>
      <p><b>Bio:</b> {data.personal?.bio}</p>
      <p><b>Skills:</b> {data.skills}</p>
      <p><b>Projects:</b> {data.projects}</p>
      <p><b>Experience:</b> {data.experience}</p>
      <p><b>Education:</b> {data.education}</p>
      <p><b>Achievements:</b> {data.achievements}</p>
      <p><b>Internships:</b> {data.internships}</p>
       
    </div>
  );
}

export default Template2;
