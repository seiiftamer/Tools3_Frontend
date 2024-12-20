import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("TEST", formData);

    try {
      const response = await axios.post("https://tools-3-backend-crt-20216081-dev.apps.rm3.7wse.p1.openshiftapps.com/admin/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log("Login successful:", response.data);

      const token = response.data.token;
      localStorage.setItem("authToken", token);
      localStorage.setItem("name", response.data.data.name);
      setFormData({ email: "", password: "" });

      navigate("/adminDisplay");
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">login </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
