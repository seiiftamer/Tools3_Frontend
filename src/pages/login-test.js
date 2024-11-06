/*import React, { useState } from "react";
import '../test.css'
const SignInTest = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here (e.g., form validation or API call)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
      <div className="heading">SignIn to your account</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            required
            autoComplete="off"
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="username">Full Name</label>
        </div>
        <div className="input-field">
          <input
            required
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input
            required
            autoComplete="off"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>

        <div className="btn-container">
          <button className="btn" type="submit">
            Submit
          </button>
          <div className="acc-text">
            New here?{" "}
            <span
              style={{ color: "#0000ff", cursor: "pointer" }}
              onClick={() => {
                // Add navigation logic here, e.g., redirect to registration page
                console.log("Redirect to Create Account page");
              }}
            >
              Create Account
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInTest;*/
