import { Tabs } from 'antd';
import AssetWatchItem from "./AssetWatchItem";
  
const AssetWatch = () => {

const tradingAssets  = [{
  label: 'Stocks (stc)',
  key: '2132#',
  disabled: false,
  children: <AssetWatchItem type="stock" />
},
{
  label: 'Commodities (cmd)',
  key: '2112#',
  disabled: false,
  children: <AssetWatchItem type="commodities"/>,
},
{
  label: 'Forex (fx)',
  key: '1132#',
  disabled: false,
  children: <AssetWatchItem type="forex" />,
},
{
  label: 'Crypto (ct)',
  key: '2332#',
  disabled: false,
  children: <AssetWatchItem type="crypto" />,
},
{
  label: 'Indices (ind)',
  key: '1131#',
  disabled: false,
  children: <AssetWatchItem type="indices" />,
},
]
    return (
      <Tabs
      defaultActiveKey="1"
      tabPosition="top"
      className='h-[20vh] md:h-[50vh] w-[100%] md:w-full [&_.ant-tabs-nav]:mb-0 [&>.ant-tabs-content-holder]:overflow-scroll rounded-lg font-clashDisplay bg-lightGray dark:bg-darkBlack dark:text-white'
      items={tradingAssets}
      />
    )
};

export default AssetWatch;