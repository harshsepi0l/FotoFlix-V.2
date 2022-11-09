import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ImagesForm } from "./pages/ImagesFolder";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ChipsArray } from "./components/Tags";
import { LandingPage } from "./pages/LandingPage";
import ImagesForm from "./pages/ImagesFolder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ImageFolder" element={<ImagesForm />} />
      </Routes>
    </Router>
  );
}

export default App;
