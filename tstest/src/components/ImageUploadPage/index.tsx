import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload } from 'antd';
import React from 'react';

const ImageUpload: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size="large">
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
      accept = ".jpg,.png,webp,.heic,.jpeg"
    >
      <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
    </Upload>
  
   
  </Space>
);
export default ImageUpload;