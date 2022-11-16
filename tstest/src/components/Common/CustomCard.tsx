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
import { CloseCircleOutlined } from "@ant-design/icons";

interface CardProps {
  PublicOrPrivate: number;
  Url: string;
  Title: string;
  Description: string;
  Dislikes: number;
  isScroll?: boolean;
  Avatar?: string;
  Likes: number;
  Tags: string;
  Favorite: number;
  key: any;
  id: number;
  isCurrentUser?: boolean;
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
    navigate("/ImagePage/" + props.id);
  };

  const buttonHandleOnClick = () => {
    navigate("/like" + props.id);
  };

  const handleAvatarOnClick = () => {
    navigate("/user/" + props.Avatar);
  };

  const [likes, setLikes] = useState(props.Likes);
  const [dislikes, setDislikes] = useState(props.Dislikes);
  const [action, setAction] = useState<string | null>(null);

  const like = () => {
    setLikes(props.Likes + 1);
    setDislikes(props.Dislikes);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(props.Likes);
    setDislikes(props.Dislikes + 1);
    setAction("disliked");
  };

  const deleteCard = () => {
    if (window.confirm("Are you sure that you want to remove card?")) {
    }
  };
  console.log(props.Likes);
  return (
    <div>
      <Card
        hoverable
        key={props.key}
        style={{ width: 300 }}
        cover={
          <img alt={props.Title} src={props.Url} onClick={handleOnClick} />
        }
        actions={[
          <CustomAction
            icon="like"
            text={props.Likes}
            isPublic={isGlobal}
            onClick={like}
          />,
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
          <CustomAction icon="status" isPublic={isGlobal} />,
        ]}
      >
        {/* <Avatar src={props.Avatar} /> */}
        <Meta
          avatar={<></>}
          title={props.Title}
          description={props.Description}
        />
      </Card>
    </div>
  );
}
