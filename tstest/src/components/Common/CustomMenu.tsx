import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import React from 'react';
import { CustomButton } from './CustomButton';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <CustomButton title={'3431234'} buttonType={'link'} color={''} />
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

export const CustomMenu: React.FC = () => (
  <Dropdown menu={{ items }} className="Custom-Menu">
    <a onClick={e => e.preventDefault()}>
      <Space>
        Menu
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
