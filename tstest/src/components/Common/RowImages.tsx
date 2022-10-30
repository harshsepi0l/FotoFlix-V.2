import { Space } from "antd";
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

  return (
    <div >
      <InfiniteScroll
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
    </div >
  )
}