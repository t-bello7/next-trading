import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Open Position`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Pending Order`,
    children: `Content of Tab Pane 2`,
  },
];

const MarketWatch = () => {
    return (
    <div className='h-[15vh] bg-lightGray dark:bg-darkBlack rounded'>
      <Tabs 
        type="card"
        className='dark:text-white'
        defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
    )
}

export default MarketWatch;

