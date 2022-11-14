import { HeartOutlined, ContainerOutlined } from "@ant-design/icons";
import { Col, Row, Tabs } from "antd";
import React from "react";
import { CustomHeader } from "../Common/CustomHeader";
import { RowImages } from "../Common/RowImages";
import "./index.css";


function CardRow(): JSX.Element {
  return (
    <div className="LandingContainer">
      <Row>
        <Col span={12} order={1}>
          <RowImages />
        </Col>
        <Col span={12} order={2}>
          <RowImages />
        </Col>
      </Row>
    </div>
  )
}

export function AccountBar(): JSX.Element {
  let tabNames = ["POSTS", "FAVORITES"];
  return (
    <Tabs
      defaultActiveKey="2"
      centered
      items={[ContainerOutlined, HeartOutlined].map((Icon, i) => {
        const id = String(i + 1);

        return {
          label: (
            <span>
              <Icon />
              {tabNames[i]}
            </span>
          ),
          key: id,
          children: <CardRow />,
        };
      })}
    />
  );
}
