import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import { useState } from "react";

function SingleImageCard(): JSX.Element {
  return (
    <Card
      hoverable
      style={{ width: "200px", background: "var(--darkpurple)", color: "var(--white)", alignItems: "center" }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
}

function CardInfo(): JSX.Element {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export function ImageCard(): JSX.Element {

  return (
    <Row>
      <Col flex={2}>
        <SingleImageCard />
      </Col>
      <Col flex={3}>
        <CardInfo />
      </Col>
    </Row>
  )
}