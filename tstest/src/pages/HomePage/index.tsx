import { Button, Col, Row } from "antd";
import { NavLink, useParams } from "react-router-dom";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { AccountBar } from "../../components/HomePage/AccountBar";
import { AccountInfo } from "../../components/HomePage/AccountInfo";
import Footer from "../../components/Common/footer/Footer";
import { CustomButton } from "../../components/Common/CustomButton";
import "./index.css";
import { useMediaQuery } from "react-responsive";
import { CustomHeader } from "../../components/Common/CustomHeader";
import { CustomFab } from "../../components/Common/CustomFab";

export function HomePage(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  let { UID } = useParams();

  return (
    <div>
      <CustomHeader isLoggedIn={true} />
      {!isMobile ? (
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
      ) : (
        <div>
          <AccountInfo />
          <AccountBar />
          <TrendingImages />
          <TrendingTags />
        </div>
      )}
      <CustomFab />
      <Footer />
    </div>
  );
}
