import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import { CustomHeader } from "../../components/Common/CustomHeader";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { AccountBar } from "../../components/HomePage/AccountBar";
import { AccountInfo } from "../../components/HomePage/AccountInfo";
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
    });
  };

  return (
    <div>
      <p>This is the Login page</p>
      <div className="header">Login</div>
      <div className="content">
        <div className="image"></div>
        <div className="form">
          <div className="login">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => {
                checkUsername(e.target.value);
              }}
            />
          </div>
          <div className="login">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => {
                checkPassword(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="login">
        <button type="button" className="btn" onClick={loginCheck} />
        <h1>{loginStatus}</h1>
      </div>
    </div>
  );
};
