import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  image: any;
  tags: string[];
}
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

function CardInfo(props: CardProps): JSX.Element {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={props.title} bordered={false} >
        <p>{props.description}</p>
        <p>{props.tags}</p>
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
        <CardInfo title="Demo Title" description={"abc"} image={undefined} tags={["dogs", "cats"]}/>
      </Col>
    </Row>
  )
}