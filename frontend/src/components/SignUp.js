import { useState } from "react";
import { useEffect } from "react";

export default function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState({
    userId: 0,
    firstName: "",
    lastName: "",
    email: "",
    passwd: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormData({ ...signUpFormData, [name]: value });
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
        const { userId } = responseData; // Extract userId from the response
        setIsAuthenticated(true);
        console.log("Registration Successful");
        setSignUpFormData({ ...signUpFormData, userId });
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
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
            value={signUpFormData.passwd}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}
