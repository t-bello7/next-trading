import { Tabs, Table } from 'antd';
import type { TabsProps } from 'antd';
import { OpenPositionDataType, OpenPositionFixedDataType } from '@/utils/type';
import type { ColumnsType } from 'antd/es/table';
import { useWebSocket } from '@/hooks/useWebSocket';
import { v4 as uuidv4 } from 'uuid';

const onChange = (key: string) => {
  console.log(key);
};

const openPositionColumns: ColumnsType<OpenPositionDataType> = [
  {
    key: uuidv4(),
    title: 'Position',
    dataIndex: 'position',
  },
  {
    key: uuidv4(),
    title: 'Type',
    dataIndex: 'type',
  },
  {
    key: uuidv4(),
    title: 'Volume',
    dataIndex: 'volume',
  },
  {
    key: uuidv4(),
    title: 'Market Volume',
    dataIndex: 'volume',
  },
  {
    key: uuidv4(),
    title: 'SL',
    dataIndex: 'sl',
  },
  {
    key: uuidv4(),
    title: 'TP',
    dataIndex: 'tp',
  },
  {
    key: uuidv4(),
    title: 'Open Price',
    dataIndex: 'open_price',
  },
  {
    key: uuidv4(),
    title: 'Market Price',
    dataIndex: 'market_price',
  },
  {
    key: uuidv4(),
    title: 'Gross Profit',
    dataIndex: 'gross_profit',
  },
  {
    key: uuidv4(),
    title: 'Net Profit',
    dataIndex: 'net_profit',
  },
  {
    key: uuidv4(),
    title: 'Rollover',
    dataIndex: 'roleover',
  },
];

const MarketWatch = () => {
    const args = {
      "openedOnly": true
    }
    const { returnData } = useWebSocket('getTrades', args);

    if (returnData === undefined) return <div> loading </div>

    const openPositionData: OpenPositionDataType[] = returnData.map((item: any, index: any) => {
      return {
      key: index,
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
        defaultActiveKey="1" 
        items={items}
        onChange={onChange} />
    </div>
    )
}

export default MarketWatch;

