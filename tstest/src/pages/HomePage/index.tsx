import { Col, Row } from "antd";

import { CustomHeader } from "../../components/Common/CustomHeader";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { AccountBar } from "../../components/HomePage/AccountBar";
import { AccountInfo } from "../../components/HomePage/AccountInfo";
import "./index.css"

export function HomePage(): JSX.Element {
  return (
    <div>
<<<<<<< HEAD
    <CustomHeader isLoggedIn={true} />
    <Row className="HomePage">
      <Col span={18}>
        <AccountInfo/>
        <AccountBar/>
      </Col>
      <Col span={6}>
        <TrendingImages />
        <TrendingTags />
      </Col>
    </Row>
  </div>
  )
}
=======
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
>>>>>>> changed files
