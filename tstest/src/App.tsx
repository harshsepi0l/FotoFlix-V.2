import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ChipsArray } from "./components/Tags";
import UploadImage  from "./components/ImageUploadPage";

function App() {
  return (
    // // <Router>
    // //   <Routes>
    // //     <Route path="/HomePage" element={<HomePage />} />
    // //     <Route path="/Login" element={<Login />} />
    // //     <Route path="/" element={<SignUp />} />
    // //   </Routes>
    // // </Router>
    <UploadImage />
  );
}

export default App;
