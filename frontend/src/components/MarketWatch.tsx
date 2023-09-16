import { Tabs, Table } from 'antd';
import type { TabsProps } from 'antd';
import { OpenPositionDataType, OpenPositionFixedDataType } from '@/utils/type';
import type { ColumnsType } from 'antd/es/table';
import { useWebSocket } from '@/hooks/useWebSocket';
import { v4 as uuidv4 } from 'uuid';

const cmdMap: any= {
  0: "Buy",
  1: "Sell",
  2: "Buy Limit",
  3: "Sell Limit",
  4: "Buy Stop",
  5: "Sell Stop",
  6: "Balance",
  7: "Credit"
}

const TableColumn = ({title} : any) => {
  return (<div className="m-0"> {title} </div>)
}

const openPositionColumns: ColumnsType<OpenPositionDataType> = [
  {
    key: uuidv4(),
    title: <TableColumn title={'Position'} />,
    dataIndex: 'position',
    width: '16%'
  },
  {
    key: uuidv4(),
    title: <TableColumn title={'Type'} />,
    dataIndex: 'type',
    width: '16%',
  },
  {
    key: uuidv4(),
    title: <TableColumn title={'Volume'} />,
    dataIndex: 'volume',
    width: '16%'
  },
  // {
  //   key: uuidv4(),
  //   title: 'SL',
  //   dataIndex: 'sl',
  // },
  // {
  //   key: uuidv4(),
  //   title: 'TP',
  //   dataIndex: 'tp',
  // },
  {
    key: uuidv4(),
    title: <TableColumn title={'Open Price'} />,
    dataIndex: 'open_price',
    width: '16%'
  },
  {
    key: uuidv4(),
    title: <TableColumn title={'Market Price'} />,
    dataIndex: 'close_price',
    width: '16%',
  },
  {
    key: uuidv4(),
    title: <TableColumn title={'Net Profit'} />,
    dataIndex: 'net_profit',
    width: '10%',
    render: (text) => <a className={text < 0 ? 'text-secondaryColor': 'text-colorPrimary'}>{text}</a>,
  },
  {
    key: uuidv4(),
    title: <div className='bg-secondaryColor' onClick={()=>console.log('closeAll')}> close</div>,
    render: () => (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24">
      <path fill="#FF3434" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" opacity=".4"/>
      <path fill="#FF3434" d="m13 12 2.4-2.3c.2-.3.2-.8 0-1a.8.8 0 0 0-1.1 0L12 10.8 9.7 8.6a.8.8 0 0 0-1 0c-.4.3-.4.8 0 1.1l2.2 2.3-2.3 2.3c-.3.3-.3.8 0 1l.6.3c.2 0 .3 0 .5-.2L12 13l2.3 2.3.5.2c.2 0 .4 0 .6-.2.2-.3.2-.8 0-1.1L13 12Z"/>
    </svg>)
    
  }
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
      type: cmdMap[item.cmd],
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
      position: item.position,
      net_profit: item.profit,
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
        label: <div className='text-darkBlack'>Open Position</div>,
        children:  <Table
          className='[&_*:bg-darkBlack]'
          columns={openPositionColumns}
          dataSource={openPositionData}
          pagination={false}
          scroll={{ y: 50 }}
          bordered
          />
        ,
      },
      // {
      //   key: '2',
      //   label: <div>Pending Order</div>,
      //   children:  <Table
      //   columns={openPositionColumns}
      //   dataSource={openPositionData}
      //   pagination={false}
      //   scroll={{ y: 50 }}
      //   bordered
      //   />
      // },
    ];
    return (
    <div className='max-h-[30vh] rounded truncate w-[100%] mb-5'>
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
         />
    </div>
    )
}

export default MarketWatch;

