import { useState } from "react";
import { Collapse,
        Switch,
        Button,
        Badge,
        Modal,
        Popover,
        Tabs
      } from 'antd';
import {
    CaretRightOutlined,
    InfoCircleOutlined,
    PlusCircleOutlined,
    LineChartOutlined
  } from '@ant-design/icons';
import TradeInput from '../atoms/TradeInput';
import { useWebSocketContext } from "../../hooks/state";

const DataLabel = (props: any) => {
    const { item } = props
    return (
      <div className='flex justify-between border-0'>
        <span>
          {item.description}
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
  const [tradeModalOpen, setTradeModalOpen] = useState(false);
  const { changeSymbol } = useWebSocketContext();
  const handleOpenChange = (newOpen: boolean) => {
    setsltpPopoverOpen(newOpen);
  };
  const { item } = props
  const handleSymbolChange = () => {
    changeSymbol(item.symbol)
  }
  const renderSwitch = (param: string)=>   {
    switch (param){
      case 'STC':
        return <div> Stock </div>;
      case 'CRT':
        return <div> Crypto </div>
      case 'CMD':
        return <div> Commodities </div>
      case 'FX':
        return <div> Forex </div>
      case 'IND':
        return <div> Indicies </div>
      default:
        return <div> asset </div>
    }
  }
  return (
    <div className='bg-white dark:bg-lightBlack dark:text-white p-4'>
      <div className='flex justify-between mb-3'>
        <span className='text-xs font-bold'>
          {item.symbol}
        </span>
        <span className='flex gap-2'>
          <InfoCircleOutlined onClick={() => setInfoModalOpen(true)}/>
          <Modal
            title={<div className="bg-white text-darkBlack dark:bg-darkBlack">{item.symbol} {item.categoryName} {item.description}</div>}
            centered
            open={infoModalOpen}
            // onOk={() => setInfoModalOpen(false)}
            // okButtonProps={<button></button>}
            onCancel={() => setInfoModalOpen(false)}
            cancelText='close'
            className="[&_.ant-modal-content]:bg-white
            [&_.ant-modal-content]:dark:bg-darkBlack
            [&_.ant-modal-content]:dark:text-white
            "
          >
            <div className="grid grid-cols-3">
            
            <div className="grid grid-cols-3"> Asset Class 
                 {
              renderSwitch(item.categoryName)
            }
            </div>
       
            <div> Subclass { item.groupName }</div>
     
            <div> Expiration { item.expiration }</div>
            

            <div> Daily Swap 
            <span> Long </span>
            { item.swapLong }
            <span> Short </span>
            { item.swapShort }
            </div>
            <div> Expiration { item.expiration }</div> 
            <div> Leverage    { item.leverage }</div> 
          </div>
          </Modal>
          <Popover className="p-5
            [&_.ant-popover-inner]:bg-darkBlack
            [&_.ant-popover-inner]:rounded
            [&_.ant-popover-inner]:text-darkBlack
            [&_.ant-popover-inner]:dark:text-white
            [&_.ant-popover-inner]:dark:bg-darkBlack
            "
            content={<div >
              <span onClick={() => setsltpPopoverOpen(false)}> close </span>
              <div className="flex justify-between">
                <span>
                  <h3> SL </h3>
                  <TradeInput />
                </span>
                <span>
                <h3> TP </h3>
                <TradeInput />
                </span>
              </div>
              <Switch checkedChildren="on" unCheckedChildren="off"/>
            </div>}
            title="Set Stop loss / Take profit for Click & Trade"
            trigger="click"
            open={sltpPopoverOpen}
            onOpenChange={handleOpenChange}
          >
          <Badge count={'SL:TP'}/>
          </Popover>
          <PlusCircleOutlined onClick={() => setTradeModalOpen(true)}/>
          <Modal
            title={<div>{item.symbol} {item.categoryName}</div>}
            centered
            open={tradeModalOpen}
            onOk={() => setTradeModalOpen(false)}
            onCancel={() => setTradeModalOpen(false)}
          >
          <Tabs
            defaultActiveKey="1"
            centered
            items={[
              {
                id: "1",
                label: `Instant Execution`,
                key: '#3',
                children: <div>
                  <div>
                    <div>
                      <span> Volume </span>
                      <span> Contract value </span>
                      <span> Margin </span>
                    </div>
                    <div>
                      <span> Spread </span>
                      <span> Commission </span>
                      <span> Pip value </span>
                      <span> Daily Swap </span>
                    </div>
                    <div>
                      <span> Stop loss </span>
                      <span> Take Profit </span>
                    </div>
                    <div>
                      
                    </div>
                  </div>

                </div>,
              },
              {
                id: "3",
                label: `Pending Order`,
                key: '#333',
                children: `Content of Tab Pane `,
              }
            ]}
          />
          </Modal>
          <LineChartOutlined className="hover:cursor-pointer" onClick={handleSymbolChange}/>
        </span>
      </div>
      <div className='mb-3 flex flex-col gap-2 justify-between lg:flex-row'>
        <Button size={'small'} type="primary" shape="round" className='flex flex-col h-[3rem] bg-colorPrimary font-clashDisplay'>
          <span className='text-sm font-extrabold'>
            Buy
          </span>
          <span className='text-sm font-extrabold'>
            {item.bid}
          </span>
        </Button>
        <TradeInput />
        <Button size={'small'} type="primary" shape="round" className='flex flex-col h-[3rem] bg-secondaryColor font-clashDisplay'>
          <span className='text-sm font-extrabold'>
            Sell
          </span>
          <span className='text-sm font-extrabold'>
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
  return (
  <div className='px-3'>
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