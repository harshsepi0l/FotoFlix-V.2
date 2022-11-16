import React from "react";
//import logo from "./logo.svg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ImagePage } from "./pages/ImagePage";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { UploadForm } from "./pages/UploadForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage/:id" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UploadForm" element={<UploadForm />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/ImagePage/:id" element={<ImagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
