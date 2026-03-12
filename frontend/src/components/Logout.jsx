import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate();

  const handleLogout = () => {

    // clear login state if stored
    localStorage.removeItem("isLoggedIn");

    alert("Logged out successfully");

    navigate("/"); // go to home page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      
      <h2>Are you sure you want to logout?</h2>

      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>

    </div>
  );
}

export default Logout;