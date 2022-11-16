import { Card } from "antd";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomCard } from "./CustomCard";
import "./index.css";
import { CardProps } from "../../props/CardProps";

export function TrendingImages(): JSX.Element {
  let { UID } = useParams();
  const [values, setValues] = React.useState<CardProps[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/Cloudinary/", {
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
            publicOrPrivate={value.publicOrPrivate}
            url={value.url}
            title={value.title}
            description={value.description}
            dislikes={value.dislikes}
            likes={value.likes}
            tags={value.tags}
            id={value.id}
            favorite={value.favorite}
            key={key}
            avatar={""}
            uid={value.uid} />
        ))}
      </div>
    </Card>
  );
}
