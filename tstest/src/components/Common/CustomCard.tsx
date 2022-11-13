import { LikeOutlined, DislikeOutlined, StarOutlined, TagsOutlined, GlobalOutlined, LockOutlined } from '@ant-design/icons';
import { Avatar, Card, Space } from 'antd';
import React from 'react';

interface CardProps {
    image: string,
    title: string,
    description: string,
    like: any,
    didslike: any,
    popularity: any,
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

export function CustomCard(props: CardProps): JSX.Element {
    let isGlobal = false;

    return (
        <Card
            style={{ width: 300, marginTop: 40}}
            cover={
                <img
                    alt="example"
                    // src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    src={props.image}
                />
            }
           
            actions={[
                
                <CustomAction
                    icon="like"
                    text={props.like}
                />,
                <CustomAction
                    icon="dislike"
                    text={props.didslike}
                />,
                <CustomAction
                    icon="popularity"
                    text={props.popularity}
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
                title={ props.title }
                description={props.description}
            />
        </Card >
    )
};

