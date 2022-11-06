import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';

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
  var tabs[:string] = ["POSTS", "COMMENTS"];

  return (
    <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill("posts", "comments", "favorites").map((_, i) => {
      const id = String(i + 1);
      return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of Tab Pane ${id}`,
      };
    })}
  />
  )
}