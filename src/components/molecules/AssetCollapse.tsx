import { useState } from "react";
import { Collapse, Button, Badge, Modal, Popover } from 'antd';
import {
    CaretRightOutlined,
    InfoCircleOutlined,
    PlusCircleOutlined,
    LineChartOutlined
  } from '@ant-design/icons';
  import type { SizeType } from 'antd/es/config-provider/SizeContext';
import TradeInput from '../atoms/TradeInput';

const DataLabel = (props: any) => {
    const { item } = props
    return (
      <div className='flex justify-between border-0'>
        <span>
          {item.symbol}
        </span>
        <span>
          {item.percentage}
        </span>
        <span>
          {item.bid}
        </span>
        <span>
          {item.ask}
        </span>
      </div>
    )
};

const DataChild = (props: any) => {
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [sltpPopoverOpen, setsltpPopoverOpen] = useState(false);
  const [tradeModalOpen, setTradeModalOpen] = useState(false)
  const handleOpenChange = (newOpen: boolean) => {
    setsltpPopoverOpen(newOpen);
  };
  const { item } = props
  return (
    <div className='bg-lightGray p-4'>
      <div className='flex justify-between mb-3'>
        <span className='text-xs font-bold'>
          {item.symbol}
        </span>
        <span className='flex gap-2'>
          <InfoCircleOutlined onClick={() => setInfoModalOpen(true)}/>
          <Modal
            title={item.symbol}
            centered
            open={infoModalOpen}
            onOk={() => setInfoModalOpen(false)}
            onCancel={() => setInfoModalOpen(false)}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
          <Popover
            content={<a onClick={() => setsltpPopoverOpen(false)}>Close</a>}
            title="Title"
            trigger="click"
            open={sltpPopoverOpen}
            onOpenChange={handleOpenChange}
          >
          <Badge count={'SL:TP'}/>
          </Popover>
          <PlusCircleOutlined onClick={() => setTradeModalOpen(true)}/>
          <Modal
            title={item.symbol}
            centered
            open={tradeModalOpen}
            onOk={() => setTradeModalOpen(false)}
            onCancel={() => setTradeModalOpen(false)}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
          <LineChartOutlined />
        </span>
      </div>
      <div className='mb-3 flex flex-col gap-2 justify-between lg:flex-row'>
        <Button size={'small'} type="primary" shape="round" className='flex flex-col h-[3rem] bg-colorPrimary font-clashDisplay'>
          <span className='text-sm'>
            Buy
          </span>
          <span className='text-sm'>
            {item.bid}
          </span>
        </Button>
        <TradeInput />
        <Button size={'small'} type="primary" shape="round" className='flex flex-col h-[3rem] bg-secondaryColor font-clashDisplay'>
          <span className='text-sm'>
            Sell
          </span>
          <span className='text-sm'>
            {item.ask}
          </span>
        </Button>
      </div>
      <div className="text-center grid grid-cols-4 gap-4 justify-center">
        <span className='text-xs font-bold'> Low </span>
        <span className='text-xs font-bold'> Leverage </span>
        <span className='text-xs font-bold'> Spread </span>
        <span className='text-xs font-bold'> High </span>
        <span className='text-xs'> {item.low} </span>
        <span className='text-xs'> {item.leverage}  </span>
        <span className='text-xs'> {item.spreadTable}  </span>
        <span className='text-xs'> {item.high}  </span>
      </div>
    </div>
  )
}

const DataRender = (props: any) => {
  const { items } = props
  return (<div className='px-3'>
    <div className='flex justify-between mx-4'>
      <span className='uppercase'> symbol </span>
      <span className='uppercase'> change </span>
      <span className='uppercase'> bid </span>
      <span className='uppercase'> ask </span>
    </div>
    <Collapse
      accordion
      className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
      bordered={false}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      items={items}
    />
  </div>
  )
}

export { DataChild, DataLabel, DataRender};