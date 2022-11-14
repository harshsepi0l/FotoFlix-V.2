import { Card } from "antd";
import { useState } from "react";
import { InfiniteScroll } from "./InfiniteScroll";

export function TrendingTags(): JSX.Element {
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
  
  return (
    <Card title="Trending Tags" 
          className="Trending Trending-Tags">
      <div style={{
        height: 300, wordWrap: "break-word", overflowY: "scroll", scrollBehavior: "smooth"
      }}>
        <InfiniteScroll
          hasMoreData={hasMoreData}
          isLoading={loading}
          onBottomHit={loadMoreNumbers}
          loadOnMount={true}
        >
          < ul >
            {
              numbers.map((n) => (
                <li key={n}><a href="/">number {n}</a></li>
            ))
            }
          </ul>
        </InfiniteScroll >
      </div>
    </Card >
  )
}