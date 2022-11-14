import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Col, Input, Row, Space } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import data from "./Data.json";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { HeaderDropdown } from "./HeaderDropdown";
import Axios from "axios";
import fotoLogo from "../ImageLogo/fotoLogo.svg";
import "./index.css";

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
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("acessRoken")) {
      setIsLoggedIn(true);
    }
  }, []);

  const [listOfPosts, setListOfPosts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3000/Cloudinary/ById/${id}`).then(
      (response) => {
        setListOfPosts(response.data);
      }
    );
  }, []);

  return (
    <Row justify="start">
      <Space align="center">
        <Col span={4}>
          <img src="../images/logo-full.svg" />
        </Col>
      </Space>

      <Col span={4} offset={2}>
        <CustomButton
          onClick={() => navigate(`/UploadForm/${id}`)}
          buttonType={"primary"}
          color={"darkpurple"}
          title={"New Post"}
        />
      </Col>
    </Row>
  );
}

function RightButtonsSection(): JSX.Element {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("accessToken") !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Row justify="end" align="middle" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={4}>
        {isLoggedIn ? (
          <Avatar
            className="Avatar"
            src="https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg"
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
      <Col className="gutter-row" span={4}>
        {isLoggedIn ? (
          <CustomButton
            buttonType={"primary"}
            color={"darkpurple"}
            title={"Logout"}
            onClick={logout}
          />
        ) : (
          <Link to="/signup">
            <CustomButton
              buttonType={"primary"}
              color={"lightpurple"}
              title={"Sign Up"}
            />
          </Link>
        )}
      </Col>
      {/* <Col>
        <HeaderDropdown />
      </Col> */}
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
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <LeftSection />
        </Col>
        <Col className="gutter-row" span={8}>
          <CustomSearch />
        </Col>
        <Col className="gutter-row" span={8}>
          {props.isLoggedIn ? <RightButtonsSection /> : <RightUserSection />}
        </Col>
      </Row>
    </div>
  );
}
