import { BellOutlined, SearchOutlined, UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Input, Row, Space, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import { useMediaQuery } from "react-responsive";
import { border, borderColor } from "@mui/system";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { HeaderDropdown } from "./HeaderDropdown";
import Axios from "axios";
import fotoLogo from "../ImageLogo/fotoLogo.svg";
import logo from "../ImageLogo/logo.svg";
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

// const onSearch = (value: string) => console.log(value);

function CustomSearch(): JSX.Element {
  const [allData, setAllData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<Array<any>>([]);
  const [wordEntered, setWordEntered] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const userData = await Axios.get("https://fotoflix.herokuapp.com/");
      const postData = await Axios.get("https://fotoflix.herokuapp.com/Cloudinary");
      setAllData([...postData.data, ...userData.data]);
    }

    getData();
    setFilteredData(allData.slice(15));
    setIsLoading(false);
  }, [])

  const handleFilter = (event: { target: { value: any } }) => {
    setIsLoading(true);
    const searchWord = event.target.value.toLowerCase();
    setWordEntered(searchWord);

    const newFilter = Array(allData).filter((value) => {
      return value?.title?.toLowerCase()?.includes(searchWord) ||
        value?.firstName?.includes(searchWord) ||
        value?.lastName?.includes(searchWord);
    }
    );

    console.log(newFilter);

    if (searchWord === "") {
      setFilteredData(allData.slice(15));
    } else {
      setFilteredData(newFilter);
    }
    setIsLoading(false);
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
      {isLoading ? <LoadingOutlined /> :
        <div className="Border-15 DataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="DataItem" href={value.link} target="_blank">
                {filteredData.length !== 0 ? (
                  <p> {value?.title || value?.firstName} </p>
                ) : (
                  <p> No Value </p>
                )}
              </a>
            );
          })}
        </div>
      }
    </div>
  );
}

function LeftSection(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    }
  }, []);

  const isMobile = useMediaQuery({
    query: "(max-width: 786px)",
  });

  return (
    <Row justify="start">
      <Space align="center">
        <Col span={4}>
          <Link to="/">
            {isMobile ? (
              <img
                style={{ color: "#937DC2", width: 20, height: 20 }}
                src={logo}
                alt="logo"
              />
            ) : (
              <img
                style={{ color: "#937DC2", width: 100, height: 50 }}
                src={fotoLogo}
                alt="logo"
              />
            )}
          </Link>
        </Col>
      </Space>

      <Col span={4} offset={2}>
        {isLoggedIn ? (
          <CustomButton
            onClick={() => {
              navigateTo("/UploadForm");
            }}
            buttonType={"primary"}
            color={"darkpurple"}
            title={"New Post"}
          />
        ) : (
          <></>
        )}
      </Col>
    </Row>
  );
}

function RightButtonsSection(): JSX.Element {
  let navigate = useNavigate(); const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("https://fotoflix.herokuapp.com/Cloudinary/byUID").then(
      (response) => {
        if (response.data.error) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      }
    );
  }, []);


  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/LandingPage");
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
    <Row justify="space-between" style={{width: "100px", marginLeft: "auto"}} align="bottom">
      <Col span={4}>
        {isLoggedIn ? (
          <CustomButton
            buttonType={"primary"}
            color={"darkpurple"}
            title={"Logout"}
            onClick={logout}
          />
          // <></>
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
            {/* <RightUserSection /> */}
          </Tooltip>
        ) : (
          <Link to="/signUp">
            {isDesktop && (
              <CustomButton
                buttonType={"primary"}
                color={"lightpurple"}
                title={"Sign Up"}
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
