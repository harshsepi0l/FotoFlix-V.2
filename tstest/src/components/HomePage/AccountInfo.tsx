import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Typography } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";

export function AccountInfo(): JSX.Element {
  const [user, setUser] = React.useState<any>(null);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/get").then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <div>
      <Row className="HomePage-Container">
        <Col flex={1} className="HomePage-Avatar">
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<AntDesignOutlined />}
          />
        </Col>
        <Col flex={5}>
          <Typography.Title level={2} className="HomePage-AccountInfo">
            {user && user[1].Username}
            {/* {editableStr} */}
          </Typography.Title>
        </Col>
      </Row>
    </div>
  );
}
