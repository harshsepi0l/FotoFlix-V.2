import { LikeOutlined, DislikeOutlined, StarOutlined, TagsOutlined, GlobalOutlined, LockOutlined } from '@ant-design/icons';
import { Avatar, Card, Space } from 'antd';
import React from 'react';

interface CardProps {
    image: string,
    title: string,
    description: string,
    isScroll?: boolean;
}

const { Meta } = Card;

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
}

interface isGlobal {
    isGlobal: boolean;
  }

export function CustomCard(): JSX.Element {
    let isGlobal = false;

    return (
        <Card
            style={{ width: 300, marginTop: 40}}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
           
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
            <Meta
                
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
            />
        </Card >
    )
};

