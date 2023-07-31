import { Tabs } from 'antd';
import AssetWatchItem from "./AssetWatchItem";
  
const AssetWatch = () => {

const tradingAssets  = [{
//   label: 'Stocks (stc)',
//   key: '2132#',
//   disabled: false,
//   children: <AssetWatchItem type="stock" />
// },
// {
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
// {
//   label: 'Crypto (ct)',
//   key: '2332#',
//   disabled: false,
//   children: <AssetWatchItem type="crypto" />,
// },
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
      className='h-[70vh] [&>.ant-tabs-content-holder]:overflow-scroll bg-lightGray rounded-lg font-clashDisplay'
      items={tradingAssets}
      />
    )
};

export default AssetWatch;