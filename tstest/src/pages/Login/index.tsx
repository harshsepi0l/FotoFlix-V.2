import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { CustomHeader } from "../../components/Common/CustomHeader";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { AccountBar } from "../../components/HomePage/AccountBar";
import { AccountInfo } from "../../components/HomePage/AccountInfo";

export const Login = () => {
  const [username, checkUsername] = useState("");
  const [password, checkPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const sendToHomePage = () => {
    // This will navigate to Login Page once user has logged in
    navigate("/HomePage");
  };

  const loginCheck = () => {
    Axios.post("http://localhost:3000/api/login", {
      Username: username,
      Password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].Username);
        sendToHomePage();
      }
    });
  };

  return (
    <div>
      <CustomHeader isLoggedIn={true} />
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
