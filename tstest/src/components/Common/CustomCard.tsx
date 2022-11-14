import {
  LikeOutlined,
  DislikeOutlined,
  StarOutlined,
  TagsOutlined,
  GlobalOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  PublicOrPrivate: number;
  Url: string;
  Title: string;
  Description: string;
  Dislikes: number;
  isScroll?: boolean;
  Avatar: string;
  Likes: number;
  Tags: string;
  Favorite: number;
  key: any;
}

const { Meta } = Card;

interface IAction {
  text?: any;
  icon: string;
  onClick?: any;
  isPublic?: boolean;
}

function CustomAction(props: IAction): JSX.Element {

  const Icon: { [text: string]: JSX.Element } = {
    like: <LikeOutlined key="like" />,
    dislike: <DislikeOutlined key="dislike" />,
    popularity: <StarOutlined key="popularity" />,
    tags: <TagsOutlined key="tags" />,
  };

  {
    props.isPublic
      ? (Icon["status"] = <GlobalOutlined key="global" />)
      : (Icon["status"] = <LockOutlined key="lock" />);
  }

  return (
    <div onClick={props.onClick}>
      {Icon[props.icon]}
      <div>{props.text}</div>
    </div>
  );
}


export function CustomCard(props: CardProps): JSX.Element {
  let isGlobal = false;
  if (props.PublicOrPrivate === 0) {
    isGlobal = true;
  }

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/image/" + props.key);
  }

  console.log(props.Likes);
  return (
    <div>
      <Card
        hoverable
        key={props.key}
        style={{ width: 300 }}
        onClick={handleOnClick}
        cover={<img alt={props.Title} src={props.Url} />}
        actions={[
          <CustomAction icon="like" text={props.Likes} isPublic={isGlobal} />,
          <CustomAction
            icon="dislike"
            text={props.Dislikes}
            isPublic={isGlobal}
          />,
          <CustomAction
            icon="popularity"
            text={props.Likes - props.Dislikes}
            isPublic={isGlobal}
          />,
          <CustomAction icon="tags" text={props.Tags} isPublic={isGlobal} />,
          <CustomAction
            icon="status"
            isPublic={isGlobal}
          />,
        ]}
      >
        <Meta
          avatar={<Avatar src={props.Avatar} />}
          title={props.Title}
          description={props.Description}
        />
      </Card>
    </div>
  );
}
