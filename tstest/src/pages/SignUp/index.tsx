import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import fotoLogo from "../../components/ImageLogo/fotoLogo.svg";
import "./signUp.css";
import Axios from "axios";
import { CustomButton } from "../../components/Common/CustomButton";
import { Input, Space } from "antd";

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
    Axios.post("http://fotoflix.herokuapp.com/signUp", {
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

  // const deleteAccount = (
  //   Username:
  //     | string
  //     | number
  //     | boolean
  //     | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  //     | React.ReactFragment
  //     | React.ReactPortal
  //     | null
  //     | undefined
  // ) => {
  //   Axios.delete(`https://full-stack-fotoflix.herokuapp.com /api/delete/${Username}`);
  //   refreshPage();
  // };

  // const updateUserName = (
  //   firstname:
  //     | string
  //     | number
  //     | boolean
  //     | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  //     | React.ReactFragment
  //     | React.ReactPortal
  //     | null
  //     | undefined
  // ) => {
  //   Axios.put(`https://full-stack-fotoflix.herokuapp.com/api/update/`, {
  //     Firstname: firstname,
  //     Username: newUsername,
  //   });
  //   setNewUsername("");
  // };

  return (
    <div style={{ marginTop: 5 }}>
      <div className="Container">
        <div className="App">
          <img
            style={{ color: "#937DC2", width: 200, height: 90 }}
            src={fotoLogo}
            alt="error"
          />

          <h1 style={{ color: "#937DC2" }}>Sign up for a free account</h1>
          <div className="SignUpContainer">
            {/* This is a row */}
            <div className="Column">
              <div className="Row">
                <div className="form">
                  <Input
                    placeholder="Username"
                    type="text"
                    name="username"
                    style={{ borderRadius: "25px", height: "82.64px" }}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  <br />
                  <br />
                  <Input
                    placeholder="Email Address"
                    style={{ borderRadius: "25px", height: "82.64px" }}
                    type="text"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <br />

                {/* This is a column */}
                <div className="Row">
                  <Input
                    placeholder="First Name"
                    type="text"
                    name="firstname"
                    style={{
                      borderRadius: "25px",
                      height: "82.64px",
                      width: "20vw",
                      marginRight: "40px",
                    }}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />

                  <Input
                    placeholder="Last Name"
                    type="text"
                    name="lastname"
                    style={{
                      borderRadius: "25px",
                      height: "82.64px",
                      width: "20vw",
                      marginLeft: "16px",
                    }}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </div>
                <br />
                <div>
                  <Space direction="vertical">
                    <Input.Password
                      placeholder="Create Password"
                      style={{ borderRadius: "25px", height: "82.64px" }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Space>
                </div>
              </div>
              <br />
              <NavLink onClick={sendToLogin} to={"/login"}>
                <p style={{ color: "#C689C6" }}>Already have an account?</p>
              </NavLink>
            </div>

            <div className="Button-SignUp">
              <CustomButton
                onClick={submitLog}
                buttonType={"primary"}
                color={"darkpurple"}
                title={"Register"}
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
        {/* {usersList.map(
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
        )} */}
      </div>
    </div>
  );
};
