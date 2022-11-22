import { Card, Input, Space } from "antd";
import Axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { InitOptions, IntegerDataType } from "sequelize";
import { CustomButton } from "../../components/Common/CustomButton";
import fotoLogo from "../../components/ImageLogo/fotoLogo.svg";
import "./index.css";

export const Login = () => {
  const [username, checkUsername] = useState("");
  const [password, checkPassword] = useState("");
  const [UID, setUID] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  // This will navigate to Login Page once user has logged in
  const LoginCheck = () => {
    // This will navigate to Landing Page once user has logged in
    const sendToLanding = () => {
      setTimeout(() => {
        navigate("/LandingPage");
      }, 2000);
    };

    // This will navigate to SignUp Page once user has signed up
    const sendToSignUp = () => {
      navigate("/signUp");
    };

    const loginCheck = () => {
      Axios.post("https://fotoflix.herokuapp.com/login", {
        userName: username,
        password: password,
      }).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          sessionStorage.setItem("accessToken", response.data);
          sendToLanding();
        }
      });
    };

    // let { id } = useParams();
    // useEffect(() => {
    //   {
    //     Axios.get(`https://full-stack-fotoflix.herokuapp.com /SignUp/Login/ById/${id}`).then(
    //       (response) => {
    //         setLoginStatus(response.data);
    //       }
    //     );
    //   }
    // }, []);
    return (
      <div className="LogIn-Page" style={{ height: "" }}>
        {" "}
        <Card className="LogIn-Card">
          <div className="LogIn-Logo-Container">
            <img className="LogIn-Logo" src={fotoLogo} alt="error" />
          </div>
          <h1 className="LogIn-Logo-Container LogIn-Text">Login Form</h1>

          <div className="Inputs">
            <Input
              className="LogIn-Input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => {
                checkUsername(e.target.value);
              }}
            />

            <Input.Password
              className="LogIn-Input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                checkPassword(e.target.value);
              }}
            />

            <NavLink onClick={sendToSignUp} to={"/signUp"}>
              <p style={{ color: "#C689C6" }}>Don't have an account?</p>
            </NavLink>
          </div>

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
            onClick={sendToLanding}
          />

          <div className="LogIn-Button">
            <CustomButton
              buttonType={"primary"}
              color={"darkpurple"}
              title={"Login"}
              onClick={loginCheck}
            />
          </div>
        </Card>
      </div>
    );
  };
  return <div>{LoginCheck()}</div>;
};
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
function sessionTimeout() {
  throw new Error("Function not implemented.");
}
