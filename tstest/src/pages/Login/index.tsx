import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { CustomHeader } from "../../components/Common/CustomHeader";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { AccountBar } from "../../components/HomePage/AccountBar";
import { AccountInfo } from "../../components/HomePage/AccountInfo";

////////// FIX ERRORS HERE //////////
export const Login = () => {
  const [username, checkUsername] = useState("");
  const [password, checkPassword] = useState("");
  const [usersList, getUsersList] = useState<any>([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/get").then((response) => {
      getUsersList(response.data);
    });
  }, []);

  const loginCheck = () => {
    Axios.post("http://localhost:3001/insert", {
      Username: username,
      Password: password,
    });

    getUsersList([
      ...usersList,
      {
        Username: username,
        Password: password,
      },
    ]);
  };

  return (
    <div>
      <CustomHeader isLoggedIn={true} />
      <p>This is the Login page</p>
      <div className="header">Login</div>
      <div className="content">
        <div className="image"></div>
        <div className="form">
          <div className="form-group">
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
          <div className="form-group">
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
      <div className="footer">
        <button type="button" className="btn" onClick={loginCheck} />
      </div>
    </div>
  );
};
