import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row, Typography } from "antd";
import Axios from "axios";
import React, { useEffect } from "react";
import BaseModalWrapper from "./ModalPopup/BaseModalWrapper";
import "./index.css";

export function AccountInfo(): JSX.Element {
  const [user, setUser] = React.useState<any>(null);

  return (
    <div>
      <Row className="HomePage-Container">
        <Col flex={1} className="HomePage-Avatar">
          <Avatar
            size={{ xs: 80, sm: 105, md: 120, lg: 150, xl: 160, xxl: 180 }}
            icon={<AntDesignOutlined />}
          />
        </Col>
        <Col flex={5}>
          <Typography.Title level={2} className="HomePage-AccountInfo">
            {user && user[1].Username}
            username
            {/* {editableStr} */}
          </Typography.Title>

          <Button
            size="large"
            onClick={toggleModal}
            className="HomePage-EditButton"
          >
            Delete Account
          </Button>
          <BaseModalWrapper
            isModalVisible={isModalVisible}
            onBackdropClick={toggleModal}
            header={"Deleted"}
          />
        </Col>
      </Row>
    </div>
  );
}
