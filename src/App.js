import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/public/login/index";
import Signup from "./pages/public/signup/index";
import PrivatePage from "./pages/private/cart/index";
import "./App.css";

function App() {
  // Assuming you have some mechanism to determine if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/private" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/private" /> : <Signup />}
        />
        {/* Private route */}
        <Route
          path="/private"
          element={isLoggedIn ? <PrivatePage /> : <Navigate to="/login" />}
        />
        {/* Default route */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/private" /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
