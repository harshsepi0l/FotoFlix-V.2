import { Space } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { CustomCard } from "./CustomCard";
import { Motion } from "./Motion";
import { PaginationApplicator } from "./pagination/PaginationApplicator";
import data from "./rowData.json";

interface CardProps {
  PublicOrPrivate: number;
  Url: string;
  Title: string;
  Description: string;
  Dislikes: number;
  isScroll?: boolean;
  Avatar: string;
  Likes: number;
  Tags: string;
  Favorite: number;
  key: any;
  id: number;
}

export function RowImages(): JSX.Element {
  const [values, setValues] = React.useState<CardProps[]>([]);
  useEffect(() => {
    axios
      .get("https://full-stack-fotoflix.herokuapp.com/Cloudinary")
      .then((response) => {
        setValues(response.data);
        console.log(response.data.id);
      });
  }, []);

  let newCards: JSX.Element[] = [];
  values.map((value, key) => {
    newCards.push(
      <Motion
        component={
          <CustomCard
            key={value.key}
            PublicOrPrivate={value.PublicOrPrivate}
            Url={value.Url}
            Title={value.Title}
            Description={value.Description}
            Dislikes={value.Dislikes}
            Avatar={value.Avatar}
            Likes={value.Likes}
            Tags={value.Tags}
            id={value.id}
            Favorite={value.Favorite}
          />
        }
        key={value.key}
      />
    );
  });
  return (
    <div className="RowImages">
      <div className="CardsContainer">
        <PaginationApplicator
          key={Math.random()} //DON'T TOUCH. This is needed to actually re-render while sorting.
          data={newCards}
          class="RowImages-Cards"
          pageSize={6}
        />
      </div>
    </div>
  );
}
