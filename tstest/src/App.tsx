import React from "react";
//import logo from "./logo.svg";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ImagePage } from "./pages/ImagePage";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { UploadForm } from "./pages/UploadForm";
import { RowImages } from "./components/Common/RowImages";
import { CustomCard } from "./components/Common/CustomCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UploadForm" element={<UploadForm />} />
        <Route path="/HomePage/:id" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
