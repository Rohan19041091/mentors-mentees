import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom'; // Import Navigate

import "./MentorRegistration.css";

const MentorLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('Authorization'); // Retrieve token from localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token}` // Set token in the Authorization header
        }
      };
      const response = await axios.post('http://localhost:8000/mentorLogin', formData, config);
      localStorage.setItem('Authorization', response.data.mentorToken); // Store new token in localStorage
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  return (
    <main className="main">
      {isAuthenticated ? (
        <Navigate to="/mentor-data" />
      ) : (
        <div className="form-container">
          <img src="https://mentor.preplaced.in/static/media/PreplacedLogoWithoutName.0b8985e680b967ff5fd9ed566af08ab0.svg" alt="preplaced" />
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="input1">Email*</label>
              <input type="text" className="form-control" id="input1" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="input2">Password</label>
              <input type="password" className="form-control" id="input2" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn-1">Log In</button>
            <div className="or">
              <hr />
              <span>or</span>
              <hr />
            </div>
            <Link to="/mentor-registration" className="btn-2">Sign up</Link>
          </form>
        </div>
      )}
    </main>
  );
};

export default MentorLogin;
