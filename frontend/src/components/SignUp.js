import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({handleAuthentication,handleUserId,isUserId }) {
  const [signUpFormData, setSignUpFormData] = useState({
    userId: 0,
    firstName: "",
    lastName: "",
    email: "",
    passwd: ""
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormData({ ...signUpFormData, [name]: value });
  };


  useEffect(() => {
    console.log("Updated Form Data with userID:", signUpFormData);
  }, [signUpFormData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data:", signUpFormData);

    try {
      const response = await fetch("http://localhost:8080/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpFormData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        const { userId } = responseData; // Extract userId from the response
        handleAuthentication(true);
        handleUserId(userId);
        console.log("isUserId: "+isUserId);
        console.log("Registration Successful");
        setSignUpFormData({ ...signUpFormData, userId });
        navigate("/preferences" )
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "10px",
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
    marginTop: "20vh"
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
    <div className="sign-up-page-background">
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{ marginBottom: "15px" }}>
          <label htmlFor="firstName" className="form-label" style={labelStyle}>
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={signUpFormData.firstName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div lassName="mb-3" style={{ marginBottom: "15px" }}>
          <label htmlFor="lastName" className="form-label" style={labelStyle}>
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={signUpFormData.lastName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div className="mb-3" style={{ marginBottom: "15px" }}>
          <label htmlFor="email" className="form-label" style={labelStyle}>
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={signUpFormData.email}
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
            value={signUpFormData.passwd}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={buttonStyle}>
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
}
