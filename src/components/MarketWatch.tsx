import React from 'react';
import { Tabs, Table } from 'antd';
import type { TabsProps } from 'antd';
import { OpenPositionDataType, OpenPositionFixedDataType } from '@/utils/type';
import type { ColumnsType } from 'antd/es/table';

const onChange = (key: string) => {
  console.log(key);
};

const openPositionColumns: ColumnsType<OpenPositionDataType> = [
  {
    title: 'Position',
    dataIndex: 'position',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Volume',
    dataIndex: 'volume',
  },
  {
    title: 'Market Volume',
    dataIndex: 'market_volume',
  },
  {
    title: 'SL',
    dataIndex: 'sl',
  },
  {
    title: 'TP',
    dataIndex: 'tp',
  },
  {
    title: 'Open Price',
    dataIndex: 'open_price',
  },
  {
    title: 'Market Price',
    dataIndex: 'market_price',
  },
  {
    title: 'Gross Profit',
    dataIndex: 'gross_profit',
  },
  {
    title: 'Net Profit',
    dataIndex: 'net_profit',
  },
  {
    title: 'Rollover',
    dataIndex: 'roleover',
  },
];

const openPositionData: OpenPositionDataType[] = [
  {
    key: '1',
    position: 'Algorand',
    type: 10,
    volume: 33,
    market_volume: 11,
    sl: 123,
    tp: 223,
    open_price: 223,
    market_price: 232,
    gross_profit: 23,
    net_profit: 121,
    rollover: 13,
  }
];


const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Open Position`,
    children:  <Table
      columns={openPositionColumns}
      dataSource={openPositionData}
      pagination={false}
      scroll={{ x: 2000, y: 500 }}
      bordered
      />
    ,
  },
  {
    key: '2',
    label: `Pending Order`,
    children:  <Table
    columns={openPositionColumns}
    dataSource={openPositionData}
    pagination={false}
    scroll={{ x: 2000, y: 500 }}
    bordered
    />
  },
];

const MarketWatch = () => {
    return (
    <div className='h-[25vh] bg-lightGray dark:bg-darkBlack rounded truncate w-[100%]'>
      <Tabs 
        type="card"
        className='dark:text-white [&_.ant-tabs-nav]:mb-0'
        defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
    )
}

export default MarketWatch;

