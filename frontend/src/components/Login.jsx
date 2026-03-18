import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const value = user.username.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  let requestBody = {
    password: user.password
  };

  if (emailRegex.test(value)) {
    requestBody.email = value;
  } 
  else if (mobileRegex.test(value)) {
    requestBody.mobile = value;
  } 
  else {
    alert("Please enter valid email or mobile number");
    return;
  }

  try {

    const res = await axios.post(
      "http://localhost:8080/api/auth/login",
      requestBody
    );

    alert(res.data);

    if (res.data === "Login successful!") {
      localStorage.setItem("isLoggedIn", true);
      navigate("/personal");
    }

  } catch (error) {
    alert("Login failed");
  }
};

  return (
    <form onSubmit={handleSubmit}>

      <h2>Login</h2>

      <input
        name="username"
        placeholder="Email or Mobile Number"
        onChange={handleChange}
        required
      />

      <br /><br />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />

      <br /><br />

      <button type="submit">Login</button>
      <button onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </button>

    </form>
  );
}

export default Login;