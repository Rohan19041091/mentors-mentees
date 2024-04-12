import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/Home";
import MentorInfo from "./components/MentorDashBoard/MentorInfo/MentoreInfo";

// import Login from "./components/Login/Login";
// import PhoneNumberValidation from "./phoneNumberValidation";
// import Button from "./Button";
// import Form from "./Form";

const App = () => {
  return (
    <div className="grid-container">
      <NavigationBar />
      <Home />
      <MentorInfo/>
      {/* <Form /> */}
      {/* <PhoneNumberValidation /> */}
      {/* <Button /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
