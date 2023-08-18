import React, { useEffect, useRef, useState } from 'react';
import { Tabs, Table } from 'antd';
import type { TabsProps } from 'antd';
import { OpenPositionDataType, OpenPositionFixedDataType } from '@/utils/type';
import type { ColumnsType } from 'antd/es/table';
import { useWebSocket } from '@/hooks/useWebSocket';
import { useSocketStream } from '@/hooks/useSocketStream';

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
    dataIndex: 'volume',
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

const MarketWatch = () => {
    // const { data } = useSocketStream('streamTrades')
    // if (!data) {
    //     return <div className='max-h-[20vh] rounded truncate w-[100%] mb-5'> loading </div>
    // }
    const args = {
      "openedOnly": true
    }
    const { returnData } = useWebSocket('getTrades', args);

    if (returnData === undefined) return <div> loading </div>
    // if(returnData){
    //   console.log(returnData);
    // }

    const openPositionData: OpenPositionDataType[] = returnData.map((item: any) => {
      return {
      close_price: item.close_price,
      close_time: item.close_time,
      close_timeString: item.close_timeString,
      closed: item.closed,
      cmd: item.cmd,
      comment: item.comment,
      commission: item.commission,
      customComment: item.customComment,
      digits: item.digits,
      expiration: item.expiration,
      expirationString: item.expirationString,
      margin_rate: item.margin_rate,
      nominalValue: item.nominalValue,
      offset: item.offset,
      open_price: item.open_price,
      open_time: item.open_time,
      open_timeString: item.open_timeString,
      order: item.order,
      order2: item.order2,
      position: item.postion,
      profit: item.profit,
      sl: item.sl,
      spread: item.spread,
      storage: item.storage,
      symbol: item.symbol,
      taxes: item.taxes,
      timestamp: item.timestamp,
      tp: item.tp,  
      volume: item.volume
    }});
    
    const items: TabsProps['items'] = [
      {
        key: '1',
        label: <div>Open Position</div>,
        children:  <Table
          className='[&_*:bg-darkBlack]'
          columns={openPositionColumns}
          dataSource={openPositionData}
          pagination={false}
          scroll={{ x: 2000, y: 200 }}
          bordered
          />
        ,
      },
      {
        key: '2',
        label: <div>Pending Order</div>,
        children:  <Table
        columns={openPositionColumns}
        dataSource={openPositionData}
        pagination={false}
        scroll={{ x: 2000, y: 200 }}
        bordered
        />
      },
    ];
    // console.log(marketData);
    return (
    <div className='max-h-[20vh] rounded truncate w-[100%] mb-5'>
      <Tabs 
        type="card"
        className='dark:text-white
        [&_.ant-tabs-tab]:bg-white
        [&_.ant-table-container]:bg-white
        [&_.ant-table-container]:dark:bg-darkBlack
        [&_.ant-table-container]:dark:text-white
        [&_.ant-tabs-tab]:dark:bg-darkBlack
        [&_.ant-tabs-nav]:mb-0'
        defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
    )
}

export default MarketWatch;

