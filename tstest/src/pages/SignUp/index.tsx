import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./signUp.css";
import Axios from "axios";

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
    navigate("/Login");
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const submitLog = (data: any) => {
    Axios.post("http://localhost:3000/SignUp", {
      Firstname: firstname,
      Lastname: lastname,
      Username: username,
      Email: email,
      Password: password,
    });

    setUsersList([
      ...usersList,
      {
        Firstname: firstname,
        LastName: lastname,
        Username: username,
        Email: email,
        Password: password,
      },
    ]);
    console.log(data);
    //  sendToLogin();
  };

  const deleteAccount = (
    Username:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined
  ) => {
    Axios.delete(`http://localhost:3000/api/delete/${Username}`);
    refreshPage();
  };

  const updateUserName = (
    firstname:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined
  ) => {
    Axios.put(`http://localhost:3000/api/update/`, {
      Firstname: firstname,
      Username: newUsername,
    });
    setNewUsername("");
  };

  return (
    <div className="Container">
      <div className="App">
        <h1 style={{ color: "#937DC2" }}>Sign up for a free account</h1>
        <div className="SignUpContainer">
          {/* This is a row */}
          <div className="Column">
            <div className="Row">
              <div className="form">
                <label>First name: </label>
                <input
                  type="text"
                  name="firstname"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />

                <label> Last name: </label>
                <input
                  type="text"
                  name="lastname"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </div>
              {/* This is a column */}
              <div className="Row">
                <label>Username: </label>
                <input
                  type="text"
                  name="username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />

                <label> Email: </label>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <label>Password: </label>
              <input
                type="text"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <NavLink onClick={sendToLogin} to={"/Login"}>
              <p style={{ color: "#C689C6" }}>Already have an account?</p>
            </NavLink>
          </div>

          <button onClick={submitLog}>Register</button>
        </div>

        {usersList.map(
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
            return (
              <div className="users">
                <h1>Hey! {key.Firstname} </h1>
                <p>
                  UserName: {key.Username} | Email: {key.Email}{" "}
                </p>
                <button
                  onClick={() => {
                    deleteAccount(key.Username);
                  }}
                >
                  Delete Account
                </button>
                <input
                  type="text"
                  id="updateInput"
                  onChange={(e) => {
                    setNewUsername(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateUserName(key.Firstname);
                  }}
                >
                  Update Username
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
