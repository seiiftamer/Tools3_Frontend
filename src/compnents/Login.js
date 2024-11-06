// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("TEST", formData);

    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log('Login successful:', response.data);
      setMessage('Login successful!');
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      setFormData({ email: '', password: '' });
      
      // Navigate to Create Order page after successful login
     // navigate('/create-order');
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Login failed. Please check your credentials.');
    }
  };
  function testNavigation(){
    navigate("/order");
  }

  return (
    <div>
      <h2>User Login</h2>
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
       
        <button onClick={testNavigation}>login </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
