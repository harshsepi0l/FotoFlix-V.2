import { Card, Col, Row } from "antd";
import { useState } from "react";
import { CustomCard } from "../../components/Common/CustomCard";
import { CustomHeader } from "../../components/Common/CustomHeader";
import { InfiniteScroll } from "../../components/Common/InfiniteScroll";
import { RowImages } from "../../components/Common/RowImages";

export function LandingPage(): JSX.Element {
  return (
    <div style={{ backgroundColor: "var(--lightpink)" }}>
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