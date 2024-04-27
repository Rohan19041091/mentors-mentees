import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home';
import MentorInfo from './components/MentorDashBoard/MentorInfo/MentoreInfo';
import MentorRegistration from './components/MentorDashBoard/MentorLogin/Mentorregistration';
import MentorLogin from './components/MentorDashBoard/MentorLogin/MentorLogin';
import MentorData from './components/MentorDashBoard/MentorData/MentorData';

const App = () => {

  return (
    <Router>
      <div className="grid-container">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentor-info" element={<MentorInfo  />} />
          <Route path="/mentor-registration" element={<MentorRegistration />} />
          <Route path="/mentor-login" element={<MentorLogin />} />
          <Route path="/mentor-data" element={<MentorData />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
