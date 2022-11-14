import Axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { idText } from "typescript";

export const Login = () => {
  const [username, checkUsername] = useState("");
  const [password, checkPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  // This will navigate to Login Page once user has logged in
  const LoginCheck = () => {
    Axios.post("http://localhost:3000/SignUp/Login", {
      Username: username,
      Password: password,
    }).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("accessToken", response.data);
        navigate(`/HomePage/${username}`);
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
        <button type="button" className="btn" onClick={() => LoginCheck()} />
        <h1>{loginStatus}</h1>
      </div>
    </div>
  );
};
