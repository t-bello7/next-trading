import { Tabs } from 'antd';
import AssetWatchItem from "./AssetWatchItem";

const tradingAssets  = [{
    label: 'Stocks (stc)',
    key: '2132#',
    disabled: false,
    children: <AssetWatchItem />
  },
  {
    label: 'Commodities (cmd)',
    key: '2112#',
    disabled: false,
    children: <AssetWatchItem />,
  },
  {
    label: 'Forex (fx)',
    key: '1132#',
    disabled: false,
    children: <AssetWatchItem />,
  },
  {
    label: 'Crypto (ct)',
    key: '2332#',
    disabled: false,
    children: <AssetWatchItem />,
  },
  {
    label: 'Indices (ind)',
    key: '1131#',
    disabled: false,
    children: <AssetWatchItem />,
  },
  ]
  
const AssetWatch = () => {
    return (
        <Tabs
                defaultActiveKey="1"
                tabPosition="top"
                className='h-[200px] [&>.ant-tabs-content-holder]:overflow-scroll bg-lightGray rounded-lg font-clashDisplay'
                items={tradingAssets}
            />
    )
};

export default AssetWatch;