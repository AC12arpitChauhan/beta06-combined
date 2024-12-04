import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes,  Navigate  } from "react-router-dom";
import Chatbot from "./pages/AI/Chatbot";
import Community from "./pages/Community/Community";
import Profile from "./pages/Profile/Profile";
import Login from "./components/LandingPange/Login";
import Signup from "./components/LandingPange/Signup";
import Auth from "./pages/Auth/Auth";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";

function App() {
  const [count, setCount] = useState(0);
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/authe" element={user ? <Navigate to="../dashboard" /> : <Auth />} /> */}
        <Route path="/auth" element={user ? <Navigate to="../dashboard" /> : <Auth />} />
        <Route path="/dashboard" element={user ? <Dashboard/> : <Auth />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
