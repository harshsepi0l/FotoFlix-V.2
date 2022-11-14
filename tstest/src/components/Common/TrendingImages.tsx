import { Card } from "antd";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard";
import { InfiniteScroll } from "./InfiniteScroll";

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
  key: any;
}

export function TrendingImages(): JSX.Element {
  const [values, setValues] = React.useState<CardProps[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Cloudinary").then((response) => {
      setValues(response.data);
    });
  }, []);

  return (
    <Card title="Trending Images"
      style={{ textAlign: "center" }}>
      <div style={{

        height: 300, wordWrap: "break-word", overflowY: "scroll", scrollBehavior: "smooth"
      }}>

        {
          values.map((value) => (
            <CustomCard
              key={value.key}
              PublicOrPrivate={value.PublicOrPrivate}
              Url={value.Url}
              Title={value.Title}
              Description={value.Description}
              Dislike={value.Dislike}
              Avatar={value.Avatar}
              Like={value.Like}
              Tags={value.Tags}
              Favorite={value.Favorite} />
          ))
        }
      </div>
    </Card >
  )
}