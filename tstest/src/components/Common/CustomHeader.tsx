import { Col, Row } from "antd";
import { CustomButton } from "./CustomButton";
import { BellOutlined } from "@ant-design/icons";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { Avatar } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./index.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
  return (
    <div>
      <Input
        placeholder="Search"
        allowClear
        bordered={false}
        suffix={suffix}
        className="Border-15 CustomSearch"
      />
    </div>
  );
}

function LeftSection(): JSX.Element {
  return (
    <Row justify="start">
      <Space align="center">
        <Col span={4}>Fotoflix</Col>
      </Space>
      <Col span={4} offset={2}>
        <CustomButton
          buttonType={"primary"}
          color={"darkpurple"}
          title={"New Post"}
        />
      </Col>
    </Row>
  );
}

function RightButtonsSection(): JSX.Element {
  return (
    <Row justify="end">
      <Col span={4}>
        <CustomButton
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
          buttonType={"default"}
          color={"white"}
          title={"Log Out"}
        />
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
