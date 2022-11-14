import { Card, Col, Row, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import React, { useEffect } from "react";
import { CustomCard } from "../Common/CustomCard";
import { LikeOutlined, DislikeOutlined, StarOutlined, TagsOutlined, GlobalOutlined, LockOutlined } from '@ant-design/icons';
import "./index.css"
import axios from "axios";
import { useParams } from "react-router-dom";
export interface CardProps {
  Title: string;
  Description: string;
  image: any;
  Tags: string[];
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

export function getData(): any {
  
};



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
      <Card title={props.Title} bordered={false} className="Card-Info">
       
        <p>{props.Description}</p>
        <p>{props.Tags}</p>
      </Card>
    </div>
  );
}

export function ImageCard(): JSX.Element {
  const [values, setValues] = React.useState<CardProps[]>([]);
  let {id} = useParams();
  useEffect( () => {
    axios.get(`http://localhost:3000/Cloudinary/byId/${id}`).then((response) => {
      setValues(response.data);
    });
  }, []);
  let card: JSX.Element[] = [];
  values.map((value, key) => {
      card.push(<CardInfo
        Title={value.Title}
        Description={value.Description}
        image={value.image}
        Tags={value.Tags}
        views={value.views}
         />)
  });
  return (
    <Row align="stretch">
      <Col span={10}>
        <SingleImageCard />
        {/* <CustomCard/> */}
      </Col>
      <Col span={14}>
        {/* <CardInfo Title={props.Title} views="200" Description={props.Description} image={undefined} Tags={["#dogs", "#cats"]} /> */}
        {card}
      </Col>
    </Row>
  )
}

function useParam(): { id: any; } {
  throw new Error("Function not implemented.");
}

