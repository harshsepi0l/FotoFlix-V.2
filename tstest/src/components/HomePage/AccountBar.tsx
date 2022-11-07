import { HeartOutlined, ContainerOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";
import "./index.css";

// const Icon: { [text: string]: JSX.Element } = {
//   "like": <LikeOutlined key="like" />,
//   "dislike": <DislikeOutlined key="dislike" />,
//   "popularity": <StarOutlined key="popularity" />,
//   "tags": <TagsOutlined key="tags" />
// }

// return (
//   <Space>
//       {Icon[props.icon]}
//       <div>{props.text}</div>
//   </Space>
// )

export function AccountBar(): JSX.Element {
  let tabNames = ["POSTS", "FAVORITES"];
  return (
    <Tabs
    defaultActiveKey="2"
    centered
    items={[ContainerOutlined, HeartOutlined].map((Icon, i) => {
      const id = String(i + 1);

      return {
        label: (
          <span>
            <Icon />
            {tabNames[i]}
          </span>
        ),
        key: id,
        children: `Tab ${id}`,
      };
    })}
  />
  );
}
