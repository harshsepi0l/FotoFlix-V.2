import { Card, Col, Row, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { CustomCard } from "../Common/CustomCard";
import {
  LikeOutlined,
  DislikeOutlined,
  StarOutlined,
  TagsOutlined,
  GlobalOutlined,
  LockOutlined,
} from "@ant-design/icons";
import "./index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import { CardProps } from "../../props/CardProps";

interface singleImageProps {
  Url: string;
  Likes: number;
  Dislikes: number;
}

interface IAction {
  text?: any;
  icon: string;
  onClick?: () => {};
  isPublic?: boolean;
}

function CustomAction(props: IAction): JSX.Element {
  const Icon: { [text: string]: JSX.Element } = {
    like: <LikeOutlined key="like" />,
    dislike: <DislikeOutlined key="dislike" />,
    popularity: <StarOutlined key="popularity" />,
    tag: <TagsOutlined key="tag" />,
  };

  {
    props.isPublic
      ? (Icon["status"] = <GlobalOutlined key="global" />)
      : (Icon["status"] = <LockOutlined key="lock" />);
  }

  return (
    <Space>
      {Icon[props.icon]}
      <div>{props.text}</div>
    </Space>
  );
}

function SingleImageCard(props: CardProps): JSX.Element {
  const [values, setValues] = useState<CardProps[]>([]);

  useEffect(() => {
    axios
      .get("https://fotoflix.herokuapp.com/Cloudinary/", {
        headers: {
          accessToken: sessionStorage.getItem("accessToken") as string,
        },
      })
      .then((response) => {
        setValues(response.data);
      });
  }, []);
  let cards: JSX.Element[] = [];

  return (
    <Card
      hoverable
      style={{
        background: "var(--darkpurple)",
        color: "var(--white)",
        alignItems: "center",
      }}
      cover={<img alt={"image"} src={props.url} />}
      actions={[
        <CustomAction icon="like" text={props.likes} />,
        <CustomAction icon="dislike" text={props.dislikes} />,
        // <CustomAction icon="popularity" text={imgPopularity} />,

        <CustomAction icon="tags" text={props.tags} />,
        <CustomAction icon="status" />,
      ]}
    ></Card>
  );
}

function CardInfo(props: CardProps): JSX.Element {
  return (
    <div className="Card-Info">
      <Card title={props.title} bordered={false} className="Card-Info">
        <p>{props.description}</p>
        <p>Uploaded by {props.uid}</p>
        <p>{props.tags}</p>
      </Card>
    </div>
  );
}

export function ImageCard(id: any): JSX.Element {
  // This is the function ultimately sent to the image page
  // Get image data based off the id passed in parameters
  const [imgId, setImgId] = useState(id); // imgId.id returns the id itself!!
  const [imagePost, setImagePost] = useState("");
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://fotoflix.herokuapp.com/Cloudinary/byId/${imgId.id}`)
        .then((response) => {
          setImagePost(response.data); // response.data: all the image data
        });
    }
    fetchData();
  }, []);
  const imageJson = JSON.parse(JSON.stringify(imagePost));

  return (
    <Row align="stretch" style={{ height: "auto" }}>
      <Col span={10}>
        <SingleImageCard
          url={imageJson.url}
          likes={imageJson.likes}
          dislikes={imageJson.dislikes}
          publicOrPrivate={0}
          title={""}
          description={""}
          avatar={""}
          tags={""}
          keyprop={undefined}
          id={0}
        />
        {/* <CustomCard/> */}
      </Col>
      <Col span={14}>
        <CardInfo
          publicOrPrivate={imageJson.publicOrPrivate}
          uid={imageJson.uid}
          id={imgId.id}
          url={imageJson.url}
          title={imageJson.title}
          description={imageJson.description}
          keyprop={undefined}
          dislikes={imageJson.dislikes}
          avatar={""}
          likes={imageJson.likes}
          tags={imageJson.tags}
          // favorite={0}
        />
      </Col>
    </Row>
  );
}
