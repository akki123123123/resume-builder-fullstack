import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        Resume Builder
      </div>

      <div className="nav-links">
        <button onClick={() => navigate("/personal")}>
          Personal Info
        </button>

        <button onClick={() => navigate("/preview")}>
          Preview
        </button>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;