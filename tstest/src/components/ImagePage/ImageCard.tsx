<<<<<<< HEAD
import { Card, Col, Row } from "antd";
import { LikeOutlined, DislikeOutlined, StarOutlined, PlusCircleFilled } from '@ant-design/icons';
import { Space } from 'antd';
=======
import { Card, Col, Row, Space } from "antd";
>>>>>>> main
import Meta from "antd/lib/card/Meta";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import { CustomCard } from "../Common/CustomCard";
import { LikeOutlined, DislikeOutlined, StarOutlined, TagsOutlined, GlobalOutlined, LockOutlined } from '@ant-design/icons';
import "./index.css"

interface IAction {
  text?: any,
  icon: string,
  onClick?: () => {},
}
interface CardProps {
  title: string;
  description: string;
  image: any;
  tags: string[];
  Views: number;
  // height: number | string;
  // width?: number | string;
}
<<<<<<< HEAD
function CustomAction(props: IAction): JSX.Element {
    const Icon: { [text: string]: JSX.Element  } = {
        "like": <LikeOutlined  key="like" />,
        "dislike": <DislikeOutlined key="dislike" />,
        "popularity": <StarOutlined key="popularity" />,
        "Favs": <PlusCircleFilled key="favs" />
        
    }

    return (
        <Space  style={{ color: "#C689C6"}} >
            {Icon[props.icon] }
            <div >{props.text}</div>
        </Space>
    )
=======

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
>>>>>>> main
}

function SingleImageCard(): JSX.Element {
  return (
<<<<<<< HEAD
      <Card
          bordered= {true}
          title="username"
          hoverable
          headStyle={{background: "#FFE6F7", color: "#937DC2", fontFamily:"Open Sans", fontSize:"24px", alignItems: "center" }}
          bodyStyle={{ background: "#C689C6", borderRadius: "0px 0px 25px 25px", color: "var(--white)", alignItems: "center"}}
          cover={
              <img 
                  alt="example" 
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                 
              />
           }
      
           actions={[
                
                <CustomAction 
                    icon="like"
                    text="Like"
                />,
                <CustomAction
                    icon="dislike"
                    text="Dislike"
                />,
                <CustomAction
                    icon="popularity"
                    text={100}
                />,
                <CustomAction
                    icon="Favs"
                    text="Favorite"
                />,
            ]}
          >
=======
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
>>>>>>> main
    </Card>
  );
}

function CardInfo(props: CardProps): JSX.Element {
  return (
    <div className="Card-Info">
<<<<<<< HEAD
      <Card bordered={true} style={{ height: "100%", background: "#FFE6F7", top:"0px", color: "#937DC2", fontFamily:"Open Sans", fontSize:"32px"}}>
        <p style={{ fontSize:"46px"}}> {props.title} </p>
=======
      <Card title={props.title} bordered={false} className="Card-Info">
>>>>>>> main
        <p>{props.description}</p>
        <p>Tags: {props.tags}</p>
        <p>Views: {props.Views}</p>
      </Card>
    </div>
  );
}

export function ImageCard(): JSX.Element {

  return (
    <Row align="stretch">
<<<<<<< HEAD
      <Col span={9}>
        <SingleImageCard />
        {/* <CustomCard/> */}
      </Col>
      <Col span={15}>
        <CardInfo 
           title={"REALLY COOL TITLE"} description={"Really Cool Description of my really cool post"} image={undefined} tags={["#dogs", "#cats"]} Views={0} />
=======
      <Col span={10}>
        <SingleImageCard />
        {/* <CustomCard/> */}
      </Col>
      <Col span={14}>
        <CardInfo title="Demo Title" description={"abc"} image={undefined} tags={["#dogs", "#cats"]} />
>>>>>>> main
      </Col>
    </Row>
  )
}

