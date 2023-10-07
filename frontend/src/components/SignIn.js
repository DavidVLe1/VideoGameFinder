import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

export default function SignIn({handleAuthentication, isAuthenticated}) {
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    passwd: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignInFormData({ ...signInFormData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSignIn = async (event) => {
    event.preventDefault();
    console.log(signInFormData);
        //attempt to sign in, if successful, set isAuthentication to true.
    //if failure, give message of sign in failed.
    try {
      const response = await fetch("http://localhost:8080/api/user/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInFormData),
      });

      if (response.ok) {
        // Sign-in was successful
        const responseData = await response.json();
        console.log("Sign-in Successful", responseData);
        handleAuthentication(true);
        //now i need to do something with the userId...
        // Navigate to the "/profile" route and pass responseData as state
        // navigate("/profile", { state: responseData });
        navigate("/");
      } else {
        const errorData = await response.json();
        console.error("Sign-in failed:", errorData);
        navigate("/error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

  };

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    maxWidth: "600px",
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
    width: "100%",
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

    <div className="sign-in-page-background">
      <div style={containerStyle}>
      {isAuthenticated ? (
        <p>You are logged in. [Log Out]</p>
      ) : (
        <form onSubmit={handleSignIn}>
          <h2 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>Sign In</h2>
          <div className="mb-3" style={{ marginBottom: "15px" }}>
            <label htmlFor="email" className="form-label" style={labelStyle}>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={signInFormData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div className="mb-3" style={{ marginBottom: "15px" }}>
            <label htmlFor="passwd" className="form-label" style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwd"
              name="passwd"
              value={signInFormData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={buttonStyle}>
            Sign In
          </button>
        </form>
      )}
      </div>
    </div>
  );
}