import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { CustomHeader } from "../../components/Common/CustomHeader";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { AccountBar } from "../../components/HomePage/AccountBar";
import { AccountInfo } from "../../components/HomePage/AccountInfo";
import { NavLink } from "react-router-dom";
import { Button, Input, Space } from "antd";
import fotoLogo from "../../components/ImageLogo/fotoLogo.svg";
import { CustomButton } from "../../components/Common/CustomButton";

export const Login = () => {
  const [username, checkUsername] = useState("");
  const [password, checkPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  // This will navigate to Login Page once user has logged in
  const sendToHomePage = () => {
    navigate("/HomePage");
  };

  // This will navigate to Landing Page once user has logged in
  const sendToLanding = () => {
    navigate("/");
  };

  // This will navigate to SignUp Page once user has signed up
  const sendToSignUp = () => {
    navigate("/SignUp");
  };

  const loginCheck = () => {
    Axios.post("http://localhost:3000/SignUp/Login", {
      Username: username,
      Password: password,
    }).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("accessToken", response.data);
      }
      sendToHomePage();
    });
  };

  return (
    <div>
       <div  style={{ marginTop: 50}}>
      
      <div className="Container">
        <div className="App">
        <img
        style={{ color: "#937DC2", width: 200, height: 90}}
        src={fotoLogo}
        alt="error"
      />
          <p style={{ color: "#937DC2", fontSize: 24 }}>Login Form</p>

          <div className="content">
            <div className="image"></div>
            <div className="form">
              <div className="login">
                <Input
                  style={{ borderRadius: "25px", height: "82.64px" }}
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={(e) => {
                    checkUsername(e.target.value);
                  }}
                />
              </div>
              <br />
              <div className="login">
                <Space direction="vertical">
                  <Input.Password
                    style={{ borderRadius: "25px", height: "82.64px" }}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      checkPassword(e.target.value);
                    }}
                  />
                </Space>
              </div>
            </div>
            <br />
            <NavLink onClick={sendToSignUp} to={"/SignUp"}>
              <p style={{ color: "#C689C6" }}>Don't have an account?</p>
            </NavLink>
          </div>
          <div className="login">

            <div className="Button-SignUp">
            <CustomButton
              buttonType={"primary"}
              color={"darkpurple"}
              title={"Login"}
              onClick={loginCheck}
              
              />
              

            <div className="margin-Register-signup">
              <NavLink onClick={sendToLanding} to={"/"}>
                <CustomButton
                  buttonType={"primary"}
                  color={"red"}
                  title={"Cancel"}
                />
              </NavLink>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
        <h1>{loginStatus}</h1>
      </div>
   
  );
};
