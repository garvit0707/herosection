import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/public/login/index";
import Signup from "./pages/public/signup/index";
import "./App.css";
import Home from "./pages/public/home";
import Navbar from './components/navbar/index';

function App() {
  // Assuming you have some mechanism to determine if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      {isLoggedIn && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/home" /> : <Signup />}
        />
        {/* Private route */}
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        {/* Default route */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
