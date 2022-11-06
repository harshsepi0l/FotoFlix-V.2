import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import { CustomCard } from "../Common/CustomCard";
import "./index.css"

interface CardProps {
  title: string;
  description: string;
  image: any;
  tags: string[];
  // height: number | string;
  // width?: number | string;
}
function SingleImageCard(): JSX.Element {
  return (
    <Card
      hoverable
      style={{ background: "var(--darkpurple)", color: "var(--white)", alignItems: "center" }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
}

function CardInfo(props: CardProps): JSX.Element {
  return (
    <div className="Card-Info">
      <Card title={props.title} bordered={false} style={{ height: "100%"}}>
        <p>{props.description}</p>
        <p>{props.tags}</p>
      </Card>
    </div>
  );
}

export function ImageCard(): JSX.Element {

  return (
    <Row align="stretch">
      <Col span={8}>
        <SingleImageCard />
        {/* <CustomCard/> */}
      </Col>
      <Col span={16}>
        <CardInfo title="Demo Title" description={"abc"} image={undefined} tags={["#dogs", "#cats"]} />
      </Col>
    </Row>
  )
}

