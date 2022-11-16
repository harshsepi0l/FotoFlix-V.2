import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Input, Row, Space, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import data from "./Data.json";
import { useMediaQuery } from "react-responsive";

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { HeaderDropdown } from "./HeaderDropdown";
import Axios from "axios";
import fotoLogo from "../ImageLogo/fotoLogo.svg";
import logo from "../ImageLogo/logo.svg";
import "./index.css";
import { border, borderColor } from "@mui/system";
import { CustomFab } from "./CustomFab";

const { Search } = Input;

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "var(--lightpurple)",
    }}
  />
);

const onSearch = (value: string) => console.log(value);

function CustomSearch(): JSX.Element {
  const [filteredData, setFilteredData] = useState(data);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value: { title: string }) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData(data);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="CustomSearchContainer">
      <Input
        placeholder="Search"
        allowClear
        bordered={false}
        suffix={suffix}
        className="Border-15 CustomSearch"
        onChange={handleFilter}
      />
      <div className="Border-15 DataResult">
        {filteredData.slice(0, 15).map((value, key) => {
          return (
            <a className="DataItem" href={value.link} target="_blank">
              {filteredData.length !== 0 ? (
                <p> {value.title} </p>
              ) : (
                <p> No Value </p>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

function LeftSection(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    }
  }, []);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 786px)",
  });

  return (
    <Row justify="start">
      <Space align="center">
        <Col span={4}>
          <Link to="/">
            {isMobile ? (
              <img className="header-logo" src={logo} alt="logo" />
            ) : (
              <img className="header-logo" src={fotoLogo} alt="logo" />
            )}
          </Link>
        </Col>
      </Space>

      <Col span={4} offset={2}>
        {isLoggedIn && !isMobile && (
          <CustomButton
            onClick={() => `/UploadForm`}
            buttonType={"primary"}
            color={"darkpurple"}
            title={"New Post"}
          />
        )}
      </Col>
    </Row>
  );
}

function RightButtonsSection(): JSX.Element {
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/Cloudinary/byUID", {
      headers: {
        accessToken: sessionStorage.getItem("accessToken"),
      },
    }).then((response) => {
      if (response.data.error) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    });
  }, []);

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 786px)",
  });

  return (
    <Row justify="end" align="bottom">
      <Col span={4}>
        {isLoggedIn ? (
          <CustomButton
            buttonType={"primary"}
            color={"darkpurple"}
            title={"Logout"}
            onClick={logout}
          />
        ) : (
          <Link to="/login">
            <CustomButton
              buttonType={"default"}
              color={"white"}
              title={"Login"}
            />
          </Link>
        )}
      </Col>
      <Col span={4}>
        {isLoggedIn ? (
          <Tooltip title="Homebase">
            <Button
              type="primary"
              shape="circle"
              size="large"
              icon={<UserOutlined />}
              style={{
                backgroundColor: "var(--darkpurple)",
                borderColor: "var(--darkpurple)",
              }}
              onClick={() => {
                navigate("/HomePage");
              }}
            />
          </Tooltip>
        ) : (
          <Link to="/SignUp">
            {isDesktop && (
              <CustomButton
                buttonType={"default"}
                color={"white"}
                title={"Login"}
              />
            )}
          </Link>
        )}
      </Col>
    </Row>
  );
}

function RightUserSection(): JSX.Element {
  return (
    <div>
      <BellOutlined />
      <Avatar src="https://joeschmoe.io/api/v1/random" />
    </div>
  );
}

interface isLoggedIn {
  isLoggedIn: boolean;
}
export function CustomHeader(props: isLoggedIn): JSX.Element {
  return (
    <div className="mainHeader Padding-20">
      <Row>
        <Col span={8}>
          <LeftSection />
        </Col>
        <Col span={8}>
          <CustomSearch />
        </Col>
        <Col span={8}>
          {props.isLoggedIn ? <RightButtonsSection /> : <RightUserSection />}
        </Col>
      </Row>
    </div>
  );
}
function setIsLoggedIn(arg0: boolean) {
  throw new Error("Function not implemented.");
}
