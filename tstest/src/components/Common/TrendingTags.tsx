import { List, ListItem, ListItemText } from "@mui/material";
import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardProps } from "../../props/CardProps";
import { CustomCard } from "./CustomCard";
import { InfiniteScroll } from "./InfiniteScroll";

export function TrendingTags(): JSX.Element {
  const [values, setValues] = useState<CardProps[]>([]);
  useEffect(() => {
    axios
      .get("https://fotoflix.herokuapp.com/Cloudinary/", {
        headers: {
          accessToken: sessionStorage.getItem("accessToken") as string,
        },
      })
      .then((response) => {
        setValues(response.data);
      });
  }, []);
  // const hasMoreData = values.map((value, key) => {
  //   return value.tags;
  // });

  return (
    <Card title="Trending Tags" className="Trending Trending-Tags">
      <div
        style={{
          height: 300,
          wordWrap: "break-word",
          overflowY: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <List>
          {values.map((item) => (
            <ListItem button key={item.tags}>
              <ListItemText primary={item.tags} />
            </ListItem>
          ))}
        </List>
      </div>
    </Card>
  );
}
