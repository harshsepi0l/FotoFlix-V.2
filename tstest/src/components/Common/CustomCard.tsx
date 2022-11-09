import { LikeOutlined, DislikeOutlined, StarOutlined, TagsOutlined, GlobalOutlined, LockOutlined } from '@ant-design/icons';
import { Avatar, Card, Space } from 'antd';
import  Axios  from 'axios';
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
    const [title, setTitle] = React.useState("Title");
    const [description, setDescription] = React.useState("Description");
    const [uploadDate, setUploadDate] = React.useState("Upload Date");
    const [likes, setLikes] = React.useState(0);
    const [dislikes, setDislikes] = React.useState(0);
    const [link, setLink] = React.useState("Link");
    const [tags, setTags] = React.useState("Tags");

    
const imageCheck = () => {
    Axios.post("http://localhost:3000/api/getimages", {
       Title : title,
       Description : description,
       
}).then((response) => {
    console.log(response);
    if (response.data.message) {
        alert(response.data.message);
    } else {
        alert("Image not found");
    }
});

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

