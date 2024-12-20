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
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/courier/login`, {
        email: formData.email,
        password: formData.password,
      });
      console.log('Login successful:', response.data);

      const token = response.data.token;
      localStorage.setItem('authToken', token);
      localStorage.setItem("name", response.data.data.name);
      setFormData({ email: '', password: '' });
      
      navigate('/courierOrder');
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Courier Login</h2>
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
       
        <button type='submit'>login </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
