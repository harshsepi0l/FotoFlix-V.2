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
  const [tags, setTags] = useState<TagProps[]>([]);
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
        setPublicOrPrivate(response.data.publicOrPrivate);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://fotoflix.herokuapp.com/Tags/ByUID`, {
        headers: {
          accessToken: sessionStorage.getItem("accessToken") as string,
        },
      })
      .then((props) => {
        setTags(props.data);
      })
      .catch((error: AxiosError) => {
        console.log(error.response?.data);
      });
  }, []);

  let newCards: JSX.Element[] = [];
  {
    Array.from(values).map((value, key) => {
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
          tag={value.tag}
          // favorite={value.favorite}
          id={value.id}
          uid={value.uid}
        />
      );
    });
    // PublicOrPrivate == "1"
    //   ? values.map((value, key) => {
    //       newCards.push(
    //         <CustomCard
    //           keyprop={key}
    //           publicOrPrivate={value.publicOrPrivate}
    //           url={value.url}
    //           title={value.title}
    //           description={value.description}
    //           dislikes={value.dislikes}
    //           avatar={value.avatar}
    //           likes={value.likes}
    //           tags={value.tags}
    //           favorite={value.favorite}
    //           id={value.id}
    //           uid={value.uid}
    //         />
    //       );
    //     })
    //   : PublicOrPrivate == "0";
    // values.map((value, key) => {
    //   <> </>;
    // });
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
function setTags(data: any) {
  throw new Error("Function not implemented.");
}
