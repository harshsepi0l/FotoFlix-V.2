import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ImagesForm } from "./pages/ImagesFolder";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { LandingPage } from "./pages/LandingPage";
import { ImagePage } from "./pages/ImagePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ImagesFolder" element={<ImagesForm />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ImagePage" element={<ImagePage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
