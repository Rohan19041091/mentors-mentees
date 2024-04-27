import React, { useState } from "react";
import { Navigate,Link } from 'react-router-dom'; // Import Navigate
import axios from 'axios';
import "./MentorRegistration.css";
import { useUserData  } from "../../../context/mentorContext";

const MentorRegistration = () => {
  const { setUserData } = useUserData();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNo:'',
    password: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state to track form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/registerMentor', formData);
      setUserData(formData.email);
      console.log(response);
      
      setIsSubmitted(true); // Set form submission status to true
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <main className="main">
        {isSubmitted ? ( // Use Navigate instead of Link
          <Navigate to="/mentor-info" />
        ) : (
          <form onSubmit={handleSubmit} className="form-container">
            <img
              src="https://mentor.preplaced.in/static/media/PreplacedLogoWithoutName.0b8985e680b967ff5fd9ed566af08ab0.svg"
              alt="preplaced"
            />
            <div className="form">
              <div className="form-group">
                <label htmlFor="exampleDropdown">Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  placeholder="Enter Name"
                  name="name" value={formData.name} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="input1">Email*</label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  placeholder="Enter Email"
                  name="email" value={formData.email} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="input2">Phone No*</label>
                <input
                  type="text"
                  className="form-control"
                  id="input2"
                  placeholder="Enter Number"
                  name="phoneNo" value={formData.phoneNo} onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="input2"> Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="input2"
                  placeholder="Enter Password"
                  name="password" value={formData.password} onChange={handleChange} 
                />
              </div>

              <button type="submit" className="btn-1">
                Next
              </button>
              <div className="or">
                <hr />
                <span>or</span>
                <hr />
              </div>
              <Link to="/mentor-login" className="btn-1">
                Log In
              </Link>
            </div>
          </form>
        )}
      </main>
    </>
  );
};

export default MentorRegistration;
