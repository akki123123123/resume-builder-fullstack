import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );

      if (res.data === "Login successful!") {
        // ✅ Store login state
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", user.username);

        setMessage("Login Successful!");

        // ✅ Navigate to Resume Builder home page
        navigate("/");
      } else {
        setMessage("Invalid username or password");
      }

    } catch (error) {
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
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
      </form>

      <p style={{ color: "red" }}>{message}</p>
    </div>
  );
}

export default Login;