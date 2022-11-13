import { Space } from "antd";
import { useState } from "react";
import { CustomCard } from "./CustomCard";
import { InfiniteScroll } from "./InfiniteScroll";
import { Motion } from "./Motion";
import { PaginationApplicator } from "./pagination/PaginationApplicator";
import data from "./rowData.json";

export function RowImages(): JSX.Element {
  const [cards, setCards] = useState(sortCards("Member"));

  function sortCards(tag: string): JSX.Element {
    let newCards: JSX.Element[] = [];
    data.items.map(function (card, key) {
      card.tags.includes(tag) ? newCards.push(
        <Motion
          component={
            <CustomCard
              image="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              title="Title"
              description="This is description"
              like={10}
              didslike={10}
              popularity={11}
            />}
          key={card.title + key}
        />
      ) : <></>
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