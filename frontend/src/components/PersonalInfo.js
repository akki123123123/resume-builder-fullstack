
import React, { useContext, useState } from "react";
import { ResumeContext } from "../ResumeContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

 

function PersonalInfo() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData({
  ...resumeData,
  personal: formData
});
    navigate("/education");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Personal Information</h2>
      <input name="name" placeholder="Full Name" onChange={handleChange} required /><br/><br/>
      <input name="email" placeholder="Email" onChange={handleChange} required /><br/><br/>
      <input name="phone" placeholder="Phone" onChange={handleChange} /><br/><br/>
      <textarea name="bio" placeholder="Short Bio" onChange={handleChange}></textarea><br/><br/>
      <button type="submit">Next</button>
      <Link to="/register">Register</Link>
<Link to="/login">Login</Link>
    </form>
     
  );
}

export default PersonalInfo;
