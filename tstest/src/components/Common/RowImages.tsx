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
  Dislike: number;
  isScroll?: boolean;
  Avatar: string;
  Like: number;
  Tags: string;
  Favorite: number;
  key: any;
}

export function RowImages(): JSX.Element {
  const [values, setValues] = React.useState<CardProps[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Cloudinary").then((response) => {
      setValues(response.data);
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
            Dislike={value.Dislike}
            Avatar={value.Avatar}
            Like={value.Like}
            Tags={value.Tags}
            Favorite={value.Favorite} />}
        key={value.key}
      />
    )
  });
  return <div className="RowImages">
    <div className="CardsContainer">
      <PaginationApplicator
        key={Math.random()}       //DON'T TOUCH. This is needed to actually re-render while sorting.
        data={newCards}
        class="RowImages-Cards"
        pageSize={6}
      />
    </div>
  </div >

}
