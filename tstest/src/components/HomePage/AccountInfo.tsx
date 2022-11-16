import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row, Typography } from "antd";
import Axios from "axios";
import React, { useEffect } from "react";
import "./index.css";

export function AccountInfo(): JSX.Element {
  const [user, setUser] = React.useState<any>(null);

  // useEffect(() => {
  //   Axios.get("http://full-stack-fotoflix.herokuapp.com//SignUp/byUsername", {}).then(
  //     (response) => {
  //       console.log(response.data);
  //       setUser(response.data);
  //     }
  //   );
  // }, []);

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const toggleModal = () => {
    setIsModalVisible((isModalVisible) => !isModalVisible);
  };

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
            {/* {user?.username} */}
            {/* {editableStr} */}
          </Typography.Title>
        </Col>
      </Row>
    </div>
  );
}
