import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CustomHeader } from "../../components/Common/CustomHeader";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { AccountBar } from "../../components/HomePage/AccountBar";
import { AccountInfo } from "../../components/HomePage/AccountInfo";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Axios from "axios";

export function HomePage(): JSX.Element {
  let { id } = useParams();
  useEffect(() => {
    Axios.get("http://localhost:3000/SignUp/info").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <div> {id} </div>
      <CustomHeader isLoggedIn={true} />
      <Row>
        <Col span={18}>
          <AccountInfo />
          <AccountBar />
        </Col>
        <Col span={6}>
          <TrendingImages />
          <TrendingTags />
        </Col>
      </Row>
    </div>
  );
}
