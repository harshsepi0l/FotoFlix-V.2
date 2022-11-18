import React from "react";
//import logo from "./logo.svg";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import "./App.css";
import { ImagePage } from "./pages/ImagePage";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { UploadForm } from "./pages/UploadForm";
import AboutUsPage from "./pages/AboutUsPage";
import { CustomHeader } from "./components/Common/CustomHeader";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UploadForm" element={<UploadForm />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/ImagePage/:id" element={<ImagePage />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
