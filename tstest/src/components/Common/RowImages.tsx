import { Space } from "antd";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard";
import { InfiniteScroll } from "./InfiniteScroll";
import { Motion } from "./Motion";
import { PaginationApplicator } from "./pagination/PaginationApplicator";
import data from "./rowData.json";

export function RowImages(): JSX.Element {
  const [cards, setCards] = useState(sortCards("Member"));

  const [values, setValues] = React.useState<[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Cloudinary").then((response) => {
      setValues(response.data);
    });
  }, []);

  function sortCards(tag: string): JSX.Element {
    let newCards: JSX.Element[] = [];
    values.map(function (value, key) {
      newCards.push(
        <Motion
          component={
            <CustomCard
              key={undefined}
              PublicOrPrivate={0}
              Url={""}
              Title={""}
              Description={""}
              Dislike={0}
              Avatar={""}
              Like={0}
              Tags={""}
              Favorite={0} />}
          key={"123" + key}
        />
      )
    });
    return <PaginationApplicator
      key={Math.random()}       //DON'T TOUCH. This is needed to actually re-render while sorting.
      data={newCards}
      class="OurMembers-Cards"
      pageSize={6}
    />;
  }

  return (
    <div className="OurMembers">
      <div className="CardsContainer">
        {cards}
      </div>
    </div >
  )
}
