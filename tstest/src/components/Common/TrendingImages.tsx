import { Card } from "antd";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomCard } from "./CustomCard";
import "./index.css";

interface CardProps {
  PublicOrPrivate: number;
  Url: string;
  Title: string;
  Description: string;
  Dislikes: number;
  isScroll?: boolean;
  Avatar?: string;
  Likes: number;
  Tags: string;
  Favorite: number;
  UID: any;
  key?: any;
}

export function TrendingImages(): JSX.Element {
  let { UID } = useParams();
  const [values, setValues] = React.useState<CardProps[]>([]);
  useEffect(() => {
    axios
      .get("https://full-stack-fotoflix.herokuapp.com/Cloudinary/", {
        headers: {
          accessToken: sessionStorage.getItem("accessToken") as string,
        },
      })
      .then((response) => {
        setValues(response.data);
      });
  }, []);

  return (
    <Card title="Trending Images" className="Trending Trending-Images">
      <div
        style={{
          height: 300,
          wordWrap: "break-word",
          overflowY: "scroll",
          scrollBehavior: "smooth",
        }}
        className="Trending-Scroll"
      >
        {Array.from(values).map((value, key) => (
          <CustomCard
            PublicOrPrivate={value.PublicOrPrivate}
            Url={value.Url}
            Title={value.Title}
            Description={value.Description}
            Dislikes={value.Dislikes}
            Likes={value.Likes}
            Tags={value.Tags}
            id={value.UID}
            Favorite={value.Favorite}
            key={key}
          />
        ))}
      </div>
    </Card>
  );
}
