import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message,Space, Upload } from 'antd';
import React from 'react';

const props: UploadProps = {
  beforeUpload: file => {
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
      message.error(`${file.name} is not a png file`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: info => {
    console.log(info.fileList);
  },
};

const ImageUpload: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size="large">
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
    >
      
      <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
    </Upload>
  </Space>
);

export default ImageUpload;