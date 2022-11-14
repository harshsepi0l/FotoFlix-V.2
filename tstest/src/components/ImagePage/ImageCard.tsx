import { Card, Col, Row, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import { CustomCard } from "../Common/CustomCard";
import { LikeOutlined, DislikeOutlined, StarOutlined, TagsOutlined, GlobalOutlined, LockOutlined } from '@ant-design/icons';
import "./index.css"

interface CardProps {
  title: string;
  description: string;
  image: any;
  tags: string[];
  views: string;
  // height: number | string;
  // width?: number | string;
}

interface IAction {
  text?: any,
  icon: string,
  onClick?: () => {},
  isPublic?: boolean,
}

function CustomAction(props: IAction): JSX.Element {
  const Icon: { [text: string]: JSX.Element } = {
      "like": <LikeOutlined key="like" />,
      "dislike": <DislikeOutlined key="dislike" />,
      "popularity": <StarOutlined key="popularity" />,
      "tags": <TagsOutlined key="tags" />
  }

  {props.isPublic ? Icon["status"]=<GlobalOutlined key="global" /> : Icon["status"]=<LockOutlined key="lock" />}

  return (
      <Space>
          {Icon[props.icon]}
          <div>{props.text}</div>
      </Space>
  )
}

function SingleImageCard(): JSX.Element {
  return (
    <Card
      hoverable
      style={{ background: "var(--darkpurple)", color: "var(--white)", alignItems: "center" }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      actions={[
                
        <CustomAction
            icon="like"
            text={100}
        />,
        <CustomAction
            icon="dislike"
            text={100}
        />,
        <CustomAction
            icon="popularity"
            text={100}
        />,
        <CustomAction
            icon="tags"
            text="Tags"
        
        />,
        <CustomAction
            icon="status"
        />

    ]}
    >
      {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
    </Card>
  );
}

function CardInfo(props: CardProps): JSX.Element {
  return (
    <div className="Card-Info">
      <Card title={props.title} bordered={false} className="Card-Info">
       
        <p>{props.description}</p>
        <p>{props.tags}</p>
      </Card>
    </div>
  );
}

export function ImageCard(): JSX.Element {

  return (
    <Row align="stretch">
      <Col span={10}>
        <SingleImageCard />
        {/* <CustomCard/> */}
      </Col>
      <Col span={14}>
        <CardInfo title="Demo Title" views="200" description={"abc"} image={undefined} tags={["#dogs", "#cats"]} />
      </Col>
    </Row>
  )
}

