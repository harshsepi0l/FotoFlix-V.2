import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';

export function AccountBar(): JSX.Element {
  return (
    <Tabs
      defaultActiveKey="3"
      items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
        const id = String(i + 1);

        return {
          label: (
            <span>
              <Icon />
              Tab {id}
            </span>
          ),
          key: id,
          children: `Tab ${id}`,
        };
      })}
    />
  );
}