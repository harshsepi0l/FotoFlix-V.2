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
import { CardProps } from "../../props/CardProps";

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
  if (props.publicOrPrivate === 0) {
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
    navigate("/user/" + props.avatar);
  };

  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);
  const [action, setAction] = useState<string | null>(null);

  const like = () => {
    setLikes(props.likes + 1);
    setDislikes(props.dislikes);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(props.likes);
    setDislikes(props.dislikes + 1);
    setAction("disliked");
  };

  const deleteCard = () => {
    if (window.confirm("Are you sure that you want to remove card?")) {
    }
  };

  return (
    <div>
      <Card
        hoverable
        key={props.keyprop}
        style={{ width: 300 }}
        cover={
          <img alt={props.title} src={props.url} onClick={handleOnClick} />
        }
        actions={[
          <CustomAction
            icon="like"
            text={props.likes}
            isPublic={isGlobal}
            onClick={like}
          />,
          <CustomAction
            icon="dislike"
            text={props.dislikes}
            isPublic={isGlobal}
          />,
          <CustomAction
            icon="popularity"
            text={props.likes - props.dislikes}
            isPublic={isGlobal}
          />,
          <CustomAction icon="tags" text={props.tags} isPublic={isGlobal} />,
          <CustomAction icon="status" isPublic={isGlobal} />,
        ]}
      >
        {/* <Avatar src={props.Avatar} /> */}
        <Meta
          avatar={<></>}
          title={props.title}
          description={props.description}
        />
      </Card>
    </div>
  );
}
