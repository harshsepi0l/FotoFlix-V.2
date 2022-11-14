import { Card } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { CustomCard } from "./CustomCard";
import { InfiniteScroll } from "./InfiniteScroll";

export function TrendingImages(): JSX.Element {
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
    key: any,
  }

  const [values, setValues] = React.useState<CardProps[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Cloudinary").then((response) => {
      setValues(response.data);
    });
  }, []);

  return (
    <Card title="Trending Images"
      style={{ textAlign: "center" }}>
      <div style={{

        height: 300, wordWrap: "break-word", overflowY: "scroll", scrollBehavior: "smooth"
      }}>
        {/* <InfiniteScroll

          hasMoreData={hasMoreData}
          isLoading={loading}
          onBottomHit={loadMoreNumbers}
          loadOnMount={true}
        >
          < ul >
            {
              numbers.map(() => (
                <CustomCard />
              ))
            }
          </ul>
        </InfiniteScroll >
        <div>{values.map(function (value, mykey) {
            <CustomCard 
            key={mykey} 
            PublicOrPrivate={value.PublicOrPrivate} 
            Url={value.Url} 
            Title={value.Title} 
            Description={value.Description} 
            Dislike={value.Dislike} 
            Avatar={value.Avatar} 
            Like={value.Like} 
            Tags={value.Tags} 
            Favorite={value.Favorite} />})};</div> */}
      </div>
    </Card >
  )
}