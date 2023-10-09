import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({ handleAuthentication, handleGamesData }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    handleAuthentication(false);
    handleGamesData([]);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    maxWidth: "800px",
    margin: "auto",
    minHeight: "50vh",
    marginTop: "20vh",
  };

  const textContainerStyle = {
    marginBottom: "15px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%", 
  };

  const buttonStyle = {
    flex: 1, 
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    margin: "0 5px",
  };

  return (
    <div className="log-out-background">
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h2 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>
            Are you sure you want to log out?
          </h2>
        </div>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={handleLogout}>
            Logout
          </button>
          <button style={buttonStyle} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
