import { Col, Row } from "antd";
import { CustomHeader } from "../../components/Common/CustomHeader";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { CommentSection } from "../../components/ImagePage/CommentSection";
import { ImageCard } from "../../components/ImagePage/ImageCard";
import "./index.css";

export function ImagePage(): JSX.Element {
  return (
    <div className="Image-Page">
      <CustomHeader isLoggedIn={true} />
      <Row>
        <Col span={16}>
          <ImageCard />
          <CommentSection />
        </Col>
        <Col span={1}>
        </Col>
        <Col span={6}>
          <br/>
          <TrendingImages />
          <br/>
          <TrendingTags />
        </Col>
      </Row>
    </div>
  );
}
