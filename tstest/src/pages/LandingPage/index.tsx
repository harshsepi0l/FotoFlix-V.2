import { Card, Col, Row } from "antd";
import { useState } from "react";
import { CustomCard } from "../../components/Common/CustomCard";
import { CustomHeader } from "../../components/Common/CustomHeader";
import CustomMenu from "../../components/Common/CustomMenu";
import { InfiniteScroll } from "../../components/Common/InfiniteScroll";
import { RowImages } from "../../components/Common/RowImages";
import "./index.css";

const gutters: Record<string, number> = {};
const vgutters: Record<string, number> = {};
const colCounts: Record<string, number> = {};

[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value;
});

export function LandingPage(): JSX.Element {
  return (
    <div className="LandingContainer">
      <CustomHeader isLoggedIn={true} />
      <Row>
        <Col span={6} order={4}>
          <RowImages />
        </Col>
        <Col span={6} order={3}>
          <RowImages />
        </Col>
        <Col span={6} order={2}>
          <RowImages />
        </Col>
        <Col span={6} order={1}>
          <RowImages />
        </Col>
      </Row>
    </div>
  )
}
