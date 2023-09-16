import { Tabs } from 'antd';
import AssetWatchItem from "./AssetWatchItem";
  
const AssetWatch = () => {

const tradingAssets  = [{
  label: 'Stocks (stc)',
  key: '2132#',
  disabled: false,
  children: <AssetWatchItem type="STC" />
},
{
  label: 'Commodities (cmd)',
  key: '2112#',
  disabled: false,
  children: <AssetWatchItem type="CMD"/>,
},
{
  label: 'Forex (fx)',
  key: '1132#',
  disabled: false,
  children: <AssetWatchItem type="FX" />,
},
{
  label: 'Crypto (ct)',
  key: '2332#',
  disabled: false,
  children: <AssetWatchItem type="CRT" />,
},
{
  label: 'Indices (ind)',
  key: '1131#',
  disabled: false,
  children: <AssetWatchItem type="IND" />,
},
]
    return (
      <Tabs
      defaultActiveKey="1"
      tabPosition="top"
      className='relative h-[20vh] md:h-[50vh] w-[100%] md:w-full [&_.ant-tabs-nav]:mb-0 [&>.ant-tabs-content-holder]:overflow-scroll [&>.ant-tabs-content-holder]:relative [&>.ant-tabs-content-holder]:h-full rounded-lg font-clashDisplay bg-lightGray dark:bg-darkBlack dark:text-white'
      items={tradingAssets}
      />
    )
};

export default AssetWatch;