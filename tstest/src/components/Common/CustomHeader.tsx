import { Col, Row } from "antd"
import { CustomButton } from "./CustomButton"
import { BellOutlined } from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./index.css";
import React, { useState } from 'react';
import data from "./Data.json";

const { Search } = Input;

const suffix = (
    <SearchOutlined
        style={{
            fontSize: 16,
            color: "var(--lightpurple)",
        }}
    />
);

const onSearch = (value: string) => console.log(value);

function CustomSearch(): JSX.Element {

    const [filteredData, setFilteredData] = useState(data);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event: { target: { value: any; }; }) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value: { title: string; }) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData(data);
        } else {
            setFilteredData(newFilter);
        }
    };

    return (
        <div className="CustomSearchContainer">
            <Input
                placeholder="Search"
                allowClear
                bordered={false}
                suffix={suffix}
                className="Border-15 CustomSearch"
                onChange={handleFilter}
            />
            <div className="Border-15 DataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return <a className="DataItem" href={value.link} target="_blank">
                        {filteredData.length !== 0 ? (
                            <p> {value.title} </p>
                        ) : (
                            <p> No Value </p>
                        )}
                    </a>
                })}
            </div>
        </div>
    )
};

function LeftSection(): JSX.Element {
    return (
        <Row justify="start">
            <Space align="center">
                <Col span={4}>
                    Fotoflix
                </Col>
            </Space>
            <Col span={4} offset={2}>
                <CustomButton buttonType={"primary"} color={"darkpurple"} title={"New Post"} />
            </Col>
        </Row >
    )
};

function RightButtonsSection(): JSX.Element {
    return (
        <Row justify="end">
            <Col span={4}>
                <CustomButton buttonType={"default"} color={"white"} title={"Log In"} />
            </Col >
            <Col span={4} offset={1}>
                <CustomButton buttonType={"primary"} color={"lightpurple"} title={"Register"} />
            </Col>
        </Row>
    )
}

function RightUserSection(): JSX.Element {
    return (
        <div>
            <BellOutlined />
            <Avatar src="https://joeschmoe.io/api/v1/random" />
        </div >
    )
}

interface isLoggedIn {
    isLoggedIn: boolean,
}
export function CustomHeader(props: isLoggedIn): JSX.Element {
    return (
        <div className="mainHeader Padding-20">
            <Row>
                <Col span={8}><LeftSection /></Col>
                <Col span={8}><CustomSearch /></Col>
                <Col span={8}>
                    {props.isLoggedIn ? <RightButtonsSection /> : <RightUserSection />}
                </Col>
            </Row>
        </div>
    )
}