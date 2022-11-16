import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { CustomFab } from "../../components/Common/CustomFab";
import { CustomHeader } from "../../components/Common/CustomHeader";
import Footer from "../../components/Common/footer/Footer";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { CommentSection } from "../../components/ImagePage/CommentSection";
import { ImageCard } from "../../components/ImagePage/ImageCard";
import "./index.css";

export function ImagePage(): JSX.Element {
  let { id } = useParams(); // This correctly gets the image id
  const isMobile = useMediaQuery({
    query: "(max-width: 1000px)"
  });

  return (
    <div className="Image-Page">
      <CustomHeader isLoggedIn={true} />
      {!isMobile ? (
        <Row>
          <Col span={18}>
            <ImageCard id={id}/>
            <CommentSection />
          </Col>
          <Col span={6}>
            <TrendingImages />
            <TrendingTags />
          </Col>
        </Row>
      ) : (
        <div>
          <ImageCard id={id}/>
          <CommentSection />
          <TrendingImages />
          <TrendingTags />
        </div>

      )}
      <CustomFab />
      <Footer />
    </div>
  );
}
