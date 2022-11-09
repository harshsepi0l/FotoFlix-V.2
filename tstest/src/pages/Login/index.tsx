import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import { Button, Input, Space } from "antd";
import { CustomHeader } from "../../components/Common/CustomHeader";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { AccountBar } from "../../components/HomePage/AccountBar";
import { AccountInfo } from "../../components/HomePage/AccountInfo";
import { CustomButton } from "../../components/Common/CustomButton";

export const Login = () => {
  const [username, checkUsername] = useState("");
  const [password, checkPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [user_name, setUsername] = useState("");

  const navigate = useNavigate();

  // This will navigate to Login Page once user has logged in
  const sendToHomePage = () => {
    navigate("/HomePage");
  };
  Axios.defaults.withCredentials = true;

  const loginCheck = () => {
    Axios.post("http://localhost:3000/api/login", {
      Username: username,
      Password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        setUsername(response?.data?.result[0]?.Username);
        localStorage.setItem("token", response.data.token);
        setLoginStatus(true);
        sendToHomePage();
      }
    });
  };
  /*
  useEffect(() => {
    Axios.get("http://localhost:3000/api/Login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].Username);
      }
    });
  }, []);
  
  */
  // Deleteable functions
  const userAuthenticated = () => {
    Axios.get("http://localhost:3000/isUserAuth", {
      headers: { "x-access-token": localStorage.getItem("token") },
    }).then((response) => {
      // console.log(response);
    });
  };

  return (
    <div className="Container">
      <div className="App">
      <p style={{ color: "#937DC2", fontSize: 24 }} >Login Form</p>
    
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
        <CustomButton
          buttonType={"primary"}
          color={"darkpurple"}
          title={"Login"}
          onClick={loginCheck}
        />
      </div>
      </div>
      </div>
  );
};
