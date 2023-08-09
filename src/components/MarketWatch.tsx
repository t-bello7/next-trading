import React from 'react';
import { Tabs } from 'antd';
import VirtualTable from './DataTable';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};


const columns = [
  { title: 'A', dataIndex: 'key', width: 150 },
  { title: 'B', dataIndex: 'key' },
  { title: 'C', dataIndex: 'key' },
  { title: 'D', dataIndex: 'key' },
  { title: 'E', dataIndex: 'key', width: 200 },
  { title: 'F', dataIndex: 'key', width: 100 },
];

const data = Array.from({ length: 100000 }, (_, key) => ({ key }));


const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Open Position`,
    children:   <VirtualTable columns={columns} dataSource={data} scroll={{ y: 300, x: '100vw' }} />
    ,
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

