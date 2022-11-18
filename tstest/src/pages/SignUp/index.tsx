import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import fotoLogo from "../../components/ImageLogo/fotoLogo.svg";
import "./index.css";
import Axios from "axios";
import { CustomButton } from "../../components/Common/CustomButton";
import { Input, Space } from "antd";
import { Card } from "antd";

export const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersList, setUsersList] = useState<any>([]);
  const [newUsername, setNewUsername] = useState("");
  const navigate = useNavigate();

  // This will navigate to Login Page once user has signed up
  const sendToLogin = () => {
    navigate("/login");
  };

  // This will navigate to Landing Page once user has signed up
  const sendToLanding = () => {
    navigate("/");
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const submitLog = (data: any) => {
    Axios.post("https://fotoflix.herokuapp.com/signUp", {
      firstName: firstname,
      lastName: lastname,
      userName: username,
      email: email,
      password: password,
    });

    setUsersList([
      ...usersList,
      {
        firstName: firstname,
        lastName: lastname,
        userName: username,
        email: email,
        password: password,
      },
    ]);
    console.log(data);
    sendToLogin();
  };

  return (
    <div className="SignUp-Page">
      {" "}
      <Card className="SignUp-Card">
        <div className="SignUp-Logo-Container">
          <img
            className="SignUp-Logo"
            src={fotoLogo}
            alt="error"
          />

        </div>
        <h1 className="SignUp-Logo-Container SignUp-Text">Sign up for a free account</h1>

        <div className="Inputs">
          <Input
            className="SignUp-Input"
            placeholder="Username"
            type="text"
            name="username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Input
            className="SignUp-Input"
            placeholder="Email Address"
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            className="SignUp-Input"
            placeholder="First Name"
            type="text"
            name="firstname"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />

          <Input
            className="SignUp-Input"
            placeholder="Last Name"
            type="text"
            name="lastname"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />

          <Input.Password
            className="SignUp-Input"
            placeholder="Create Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <NavLink onClick={sendToLogin} to={"/login"}>
            <p style={{ color: "#C689C6" }}>Already have an account?</p>
          </NavLink>
        </div>

        <NavLink onClick={sendToLanding} to={"/"} className="Button-Guest">
          <CustomButton
            buttonType={"default"}
            color={"white"}
            title={"Continue as a guest"}
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
          />
        </NavLink>

        <div className="SignUp-Button">
          <CustomButton
            onClick={submitLog}
            buttonType={"primary"}
            color={"darkpurple"}
            title={"Register"}
          />

          <NavLink onClick={sendToLanding} to={"/"}>
            <CustomButton
              buttonType={"primary"}
              color={"red"}
              title={"Cancel"}
            />
          </NavLink>
        </div>

      </Card>
    </div>
  );
};
