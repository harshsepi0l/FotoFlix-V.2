import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ChipsArray } from "./components/Tags";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
    // <ChipsArray />
  );
}

export default App;
