import React from "react"
import { useState } from "react";

export default function SignIn() {
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: ""
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);//will set to true upon sign in being successful

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignInFormData({ ...signInFormData, [name]: value });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    console.log(signInFormData);
    //attempt to sign in, if successful, set isAuthentication to true.
    //if failure, give message of sign in failed.

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
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
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