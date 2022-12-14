import { Space } from "antd";
import axios, { AxiosError } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CustomCard } from "./CustomCard";
import { Motion } from "./Motion";
import { PaginationApplicator } from "./pagination/PaginationApplicator";
import data from "./rowData.json";
import { CardProps } from "../../props/CardProps";
import { TagProps } from "../../props/TagProps";

export function LandImages(): JSX.Element {
  let { UID } = useParams();
  const [values, setValues] = useState<CardProps[]>([]);
  const [PublicOrPrivate, setPublicOrPrivate] = useState("");

  useEffect(() => {
    axios
      .get(`https://fotoflix.herokuapp.com/Cloudinary/`, {
        headers: {
          accessToken: sessionStorage.getItem("accessToken") as string,
        },
      })
      .then((response) => {
        setValues(response.data);
        setPublicOrPrivate(response.data);
        console.log(response.data);
      });
  }, []);

  let newCards: JSX.Element[] = [];
  {
    // Array.from(values).map((value, key) => {
    //   newCards.push(
    //     <CustomCard
    //       keyprop={key}
    //       publicOrPrivate={value.publicOrPrivate}
    //       url={value.url}
    //       title={value.title}
    //       description={value.description}
    //       dislikes={value.dislikes}
    //       avatar={value.avatar}
    //       likes={value.likes}
    //       tags={value.tags}
    //       id={value.id}
    //       uid={value.uid}
    //     />
    //   );
    // });

    Array.from(values).map((value, key) => {
      if (value.publicOrPrivate == 0) {
        newCards.push(
          <CustomCard
            keyprop={key}
            publicOrPrivate={value.publicOrPrivate}
            url={value.url}
            title={value.title}
            description={value.description}
            dislikes={value.dislikes}
            avatar={value.avatar}
            likes={value.likes}
            tags={value.tags}
            id={value.id}
            uid={value.uid}
          />
        );
      }
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
