import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { CustomHeader } from "../../components/Common/CustomHeader";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { AccountBar } from "../../components/HomePage/AccountBar";
import { AccountInfo } from "../../components/HomePage/AccountInfo";

export function LoginList() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usersList, getUsersList] = useState<any>([]);

  const refreshPage = window.location.reload();

  useEffect(() => {
    Axios.get("http://localhost:3000/api/get").then((response) => {
      getUsersList(response.data);
    });
  }, []);

  const submitLog = () => {
    Axios.post("http://localhost:3000/api/insert", {
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
  /*
usersList.map(
  (key: {
    Firstname:
      | string
      | number
      | boolean
      | React.ReactElement<
          any,
          string | React.JSXElementConstructor<any>
        >
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    Username:
      | string
      | number
      | boolean
      | React.ReactElement<
          any,
          string | React.JSXElementConstructor<any>
        >
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    Email:
      | string
      | number
      | boolean
      | React.ReactElement<
          any,
          string | React.JSXElementConstructor<any>
        >
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }) => {

    ////////// FIX ERRORS HERE //////////
export function Login(): JSX.Element {
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
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Login
        </button>
      </div>
    </div>
  );
*/
}
