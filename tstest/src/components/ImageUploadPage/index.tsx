import { UploadOutlined } from "@ant-design/icons";
import { Button, Space, Upload } from "antd";
import { Input } from "antd";
import { ChipsArray } from "../Tags";
import React from "react";

const { TextArea } = Input;

const onChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  console.log("Change:", e.target.value);
};

const ImageUpload: React.FC = () => (
  <div>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
      accept=".jpg,.png,webp,.heic,.jpeg"
    >
      <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
    </Upload>
    <br />
    <br />
    <>
      <p>Title</p>
      <Input showCount maxLength={20} onChange={onChange} />
      <br />
      <br />
      <p>Description</p>
      <TextArea showCount maxLength={100} onChange={onChange} />
    </>
    <br />
    <br />
    <ChipsArray />

    <br />
    <br />
    <button> SUBMIT!</button>
  </div>
);
export default ImageUpload;
