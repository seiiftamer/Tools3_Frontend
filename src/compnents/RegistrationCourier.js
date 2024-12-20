// src/Registration.js
import React, { useState } from "react";
import axios from "axios";

const CouierRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    console.log("TEST");

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("TEST", formData);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/courier/signup`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }
      );
      console.log("Registration successful:", response.data);
      setMessage("Sign Up successful!");
      setFormData({ name: "", email: "", phone: "", password: "" });
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Sign Up failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h2>Courier Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CouierRegistration;
