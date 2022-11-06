import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';
import "./index.css"

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
  let tabs: Array<string> = ["POSTS", "LIKED", "FAVOURITES", "SAVED"]

  return (
    <Tabs
    className='AccountBar'
    defaultActiveKey="1"
    centered
    items={tabs.map((_, i) => {
      const id = String(i + 1);
      return {
        label: `${tabs[i]}`,
        key: id,
        children: `Content of Tab Pane ${id}`,
      };
    })}
  />
  )
}