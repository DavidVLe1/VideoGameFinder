import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    passwd: ""
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);//will set to true upon sign in being successful

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
        setIsAuthenticated(true);
        //now i need to do something with the userId...
        // Navigate to the "/profile" route and pass responseData as state
        navigate("/profile", { state: responseData });
      } else {
        const errorData = await response.json();
        console.error("Sign-in failed:", errorData);
        navigate("/error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

  };

  return (
    <div>
      {isAuthenticated ? (
        <p>You are logged in. [Log Out]</p>
      ) : (
        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwd" className="form-label">
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
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      )}
    </div>
  );
}