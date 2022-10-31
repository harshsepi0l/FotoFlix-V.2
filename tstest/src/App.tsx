import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ImagePage } from "./pages/ImagePage";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { SignUp } from "./pages/SignUp";
//import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
