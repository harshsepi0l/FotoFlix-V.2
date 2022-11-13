<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ImagesForm } from "./pages/ImagesFolder";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { LandingPage } from "./pages/LandingPage";
import { ImagePage } from "./pages/ImagePage";
=======
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
>>>>>>> windows-harsha

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
      <Route path="/" element={<LandingPage />} />
        <Route path="/ImagesFolder" element={<ImagesForm />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ImagePage" element={<ImagePage />} />
=======
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UploadForm" element={<UploadForm />} />
>>>>>>> windows-harsha
      </Routes>
    </Router>
  );
}

export default App;
