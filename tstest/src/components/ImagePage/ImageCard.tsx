import { Card, Col, Row } from "antd";
import { LikeOutlined, DislikeOutlined, StarOutlined, PlusCircleFilled } from '@ant-design/icons';
import { Space } from 'antd';
import Meta from "antd/lib/card/Meta";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import { CustomCard } from "../Common/CustomCard";
import "./index.css"

interface IAction {
  text?: any,
  icon: string,
  onClick?: () => {},
}
interface CardProps {
  title: string;
  description: string;
  image: any;
  tags: string[];
  Views: number;
  // height: number | string;
  // width?: number | string;
}
function CustomAction(props: IAction): JSX.Element {
    const Icon: { [text: string]: JSX.Element  } = {
        "like": <LikeOutlined  key="like" />,
        "dislike": <DislikeOutlined key="dislike" />,
        "popularity": <StarOutlined key="popularity" />,
        "Favs": <PlusCircleFilled key="favs" />
        
    }

    return (
        <Space  style={{ color: "#C689C6"}} >
            {Icon[props.icon] }
            <div >{props.text}</div>
        </Space>
    )
}

function SingleImageCard(): JSX.Element {
  return (
      <Card
          bordered= {true}
          title="username"
          hoverable
          headStyle={{background: "#FFE6F7", color: "#937DC2", fontFamily:"Open Sans", fontSize:"24px", alignItems: "center" }}
          bodyStyle={{ background: "#C689C6", borderRadius: "0px 0px 25px 25px", color: "var(--white)", alignItems: "center"}}
          cover={
              <img 
                  alt="example" 
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                 
              />
           }
      
           actions={[
                
                <CustomAction 
                    icon="like"
                    text="Like"
                />,
                <CustomAction
                    icon="dislike"
                    text="Dislike"
                />,
                <CustomAction
                    icon="popularity"
                    text={100}
                />,
                <CustomAction
                    icon="Favs"
                    text="Favorite"
                />,
            ]}
          >
    </Card>
  );
}

function CardInfo(props: CardProps): JSX.Element {
  return (
    <div className="Card-Info">
      <Card bordered={true} style={{ height: "100%", background: "#FFE6F7", top:"0px", color: "#937DC2", fontFamily:"Open Sans", fontSize:"32px"}}>
        <p style={{ fontSize:"46px"}}> {props.title} </p>
        <p>{props.description}</p>
        <p>Tags: {props.tags}</p>
        <p>Views: {props.Views}</p>
      </Card>
    </div>
  );
}

export function ImageCard(): JSX.Element {

  return (
    <Row align="stretch">
      <Col span={9}>
        <SingleImageCard />
        {/* <CustomCard/> */}
      </Col>
      <Col span={15}>
        <CardInfo 
           title={"REALLY COOL TITLE"} description={"Really Cool Description of my really cool post"} image={undefined} tags={["#dogs", "#cats"]} Views={0} />
      </Col>
    </Row>
  )
}

