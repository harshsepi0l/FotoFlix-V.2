import { Space } from "antd";
import Axios from "axios";
import React from "react";
import { useState } from "react";
import { CustomCard } from "./CustomCard";
import { InfiniteScroll } from "./InfiniteScroll";

export function RowImages(): JSX.Element {
  const NUMBERS_PER_PAGE = 100;

  const [numbers, setNumbers] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const hasMoreData = numbers.length < 1000;

  const loadMoreNumbers = () => {
    setPage((page) => page + 1);
    setLoading(true);
    setTimeout(() => {
      const newNumbers = new Array(NUMBERS_PER_PAGE)
        .fill(1)
        .map((_, i) => page * NUMBERS_PER_PAGE + i);
      setNumbers((nums) => [...nums, ...newNumbers]);
      setLoading(false);
    }, 300);
  };

  const [postData, setPostData] = React.useState([]);

  const getPostData = () => {
    Axios.get("http://localhost:3000/api/getimages").then((response: any) => {
      setPostData(response.data);
    });
  };

  React.useEffect(() => {
    getPostData();
  });

  return (
    <div>
      <InfiniteScroll
        hasMoreData={hasMoreData}
        isLoading={loading}
        onBottomHit={loadMoreNumbers}
        loadOnMount={true}
      >
        <ul>
          {Object.values(postData).map((value: any) => (
            <CustomCard
              URL={value.URL}
              Title={value.Title}
              Description={value.Description}
              Tags={value.Tags}
              Likes={value.Likes}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}
