
import React, { useContext, useRef } from "react";
import { ResumeContext } from "../ResumeContext";
import Template1 from "./Template1";
import Template2 from "./Template2";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Navbar from "./Navbar";

function ResumePreview() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const resumeRef = useRef();

  const downloadPDF = () => {
    html2canvas(resumeRef.current).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("Resume.pdf");
    });
  };

  return (
    <>
    <Navbar/>
    <div style={{padding:"20px"}}>
      <select
        onChange={(e)=>setResumeData({...resumeData, template:e.target.value})}
      >
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
      </select>

      <div ref={resumeRef} className="resume-container"style={{background:"#fff", padding:"20px", marginTop:"20px"}}>
        {resumeData.template === "template1" ?
          <Template1 data={resumeData} /> :
          <Template2 data={resumeData} />
        }
      </div>

      <br/>
      <button onClick={downloadPDF}>Download Resume</button>
    </div>
    </>
  );
}

export default ResumePreview;
