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
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Reduced opacity to make it more transparent
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%", // You can adjust the width as needed
    maxWidth: "800px", // You can adjust the maximum width as needed
    margin: "auto",
    minHeight: "50vh",
    marginTop: "20vh",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%", // Make the text box wider
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div className="log-out-background">
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>
          Are you sure you want to log out?
        </h2>
        <button style={buttonStyle} onClick={handleLogout}>
          Logout
        </button>
        <button style={buttonStyle} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
