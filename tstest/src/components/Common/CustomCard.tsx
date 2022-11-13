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
import React, { useEffect } from "react";

interface CardProps {
  PublicOrPrivate: number;
  Url: string;
  Title: string;
  Description: string;
  Dislike: number;
  isScroll?: boolean;
  Avatar: string;
  Like: number;
  Tags: string;
  Favorite: number;
}

const { Meta } = Card;

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
    tags: <TagsOutlined key="tags" />,
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

interface isGlobal {
  isGlobal: boolean;
}

interface isGlobal {
    isGlobal: boolean;
  }

export function CustomCard(): JSX.Element {
  let isGlobal = false;
  const [values, setValues] = React.useState<CardProps[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Cloudinary").then((response) => {
      setValues(response.data);
    });
  }, []);

  return (
    <div>
      {values.map((value, key) => (
        <Card
          key={key}
          style={{ width: 300 }}
          cover={<img alt="example" src={value.Url} />}
          actions={[
            <CustomAction icon="like" text={value.Like} isPublic={isGlobal} />,
            <CustomAction
              icon="dislike"
              text={value.Dislike}
              isPublic={isGlobal}
            />,
            <CustomAction
              icon="popularity"
              text={value.Favorite}
              isPublic={isGlobal}
            />,
            <CustomAction icon="tags" text={value.Tags} isPublic={isGlobal} />,
            <CustomAction
              icon="status"
              text={value.PublicOrPrivate}
              isPublic={isGlobal}
            />,
          ]}
        >
          <Meta
            avatar={<Avatar src={value.Avatar} />}
            title={value.Title}
            description={value.Description}
          />
        </Card>
      ))}
    </div>
  );
}
