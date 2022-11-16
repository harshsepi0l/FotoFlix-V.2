import { Space } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
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
  let { UID } = useParams();
  const [values, setValues] = useState<CardProps[]>([]);
  useEffect(() => {
    axios
      .get(`http://full-stack-fotoflix.herokuapp.com//Cloudinary/byUID/`, {
        headers: {
          accessToken: sessionStorage.getItem("accessToken") as string,
        },
      })
      .then((response) => {
        setValues(response.data);
      });
  }, []);

  let newCards: JSX.Element[] = [];
  {
    Array.from(values).map((value, key) => {
      newCards.push(
        <CustomCard
          key={key}
          PublicOrPrivate={value.PublicOrPrivate}
          Url={value.Url}
          Title={value.Title}
          Description={value.Description}
          Dislikes={value.Dislikes}
          Avatar={value.Avatar}
          Likes={value.Likes}
          Tags={value.Tags}
          Favorite={value.Favorite}
          id={value.id}
        />
      );
    });
  }
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
