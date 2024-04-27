import React, { useState } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom'; // Import Navigate

import { useUserData } from "../../../context/mentorContext";
import "./MentorInfo.css";

const MentorInfo = () => {
  const { userData } = useUserData();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    experience: '',
    domain:"",
    linkdin:'',
    startTime:'',
    endTime:'',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/mentorInfo', {
        email: userData,
        description: formData.description,
        experience: formData.experience,
        domain: formData.domain,
        startTime: formData.startTime,
        endTime: formData.endTime,
        linkdin: formData.linkdin,
      });
      console.log(userData);
      console.log(response);
      setIsSubmitted(true);
      // Handle success
    } catch (error) {
      console.error('Adding description failed:', error.response.data.message);
    }
  };

  return (
    <>
      <main className="main">
        {isSubmitted ? <Navigate to="/mentor-data" /> : (
          <div className="form-container">
            <img
              src="https://mentor.preplaced.in/static/media/PreplacedLogoWithoutName.0b8985e680b967ff5fd9ed566af08ab0.svg"
              alt="preplaced"
            />
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleDropdown">Domain Expertise*</label>
                <input type="text" onChange={handleChange} value={formData.email} name="domain" className="form-control" id="input1" placeholder="Enter Domain" />
              </div>
              <div className="form-group">
                <label htmlFor="input1">Years of experience*</label>
                <input type="text" className="form-control" id="input1" value={formData.experience} name="experience" placeholder="Enter Year" onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="input2">Linkdinurl*</label>
                <input type="text" className="form-control" id="input2" placeholder="Enter url" value={formData.linkdin} name="linkdin" onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="input2">Free Slot*</label>
                <input type="text" className="form-control" id="input2" placeholder="Enter StartTime" value={formData.startTime} name="startTime" onChange={handleChange}/>
                <input type="text" className="form-control" id="input2" placeholder="Enter EndTime" value={formData.endTime} name="endTime" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="input2">Description*</label>
                <input type="text" className="form-control" id="input2" placeholder="Enter Description" name="description"  value={formData.description} onChange={handleChange}/>
              </div>
              <button type="submit" className="btn-1">Sign in</button>
            </form>
          </div>
        )}
      </main>
    </>
  );
};

export default MentorInfo;
