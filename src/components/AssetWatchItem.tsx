// import useSWR from 'swr';
import { v4 as uuidv4 } from 'uuid';
import { Collapse } from 'antd';
import type { CSSProperties } from 'react';
import type { CollapseProps } from 'antd';
import { DataLabel, DataChild, DataRender } from './molecules/AssetCollapse';
import { useWebSocket } from '@/hooks/useWebSocket';

const panelStyle = {
  border: 'none'
};

const AssetWatchItem = ({ type }: any) => {
  const { returnData } = useWebSocket('getAllSybmols') 
  if (!returnData ) return <div> loading </div>
//   const returnData = [
//       {
//           "symbol": "HALO.US_4",
//           "currency": "USD",
//           "categoryName": "STC",
//           "currencyProfit": "USD",
//           "quoteId": 6,
//           "quoteIdCross": 4,
//           "marginMode": 103,
//           "profitMode": 6,
//           "pipsPrecision": 2,
//           "contractSize": 1,
//           "exemode": 1,
//           "time": 1690833599674,
//           "expiration": null,
//           "stopsLevel": 0,
//           "precision": 2,
//           "swapType": 2,
//           "stepRuleId": 671,
//           "type": 13,
//           "instantMaxVolume": 2147483647,
//           "groupName": "US",
//           "description": "Halozyme Therapeutics Inc CFD",
//           "longOnly": false,
//           "trailingEnabled": false,
//           "marginHedgedStrong": false,
//           "swapEnable": true,
//           "percentage": 100,
//           "bid": 42.53,
//           "ask": 42.76,
//           "high": 43.74,
//           "low": 42.48,
//           "lotMin": 1,
//           "lotMax": 1000000,
//           "lotStep": 1,
//           "tickSize": 0.01,
//           "tickValue": 0.01,
//           "swapLong": -0.02656,
//           "swapShort": 0,
//           "leverage": 30,
//           "spreadRaw": 0.23,
//           "spreadTable": 23,
//           "starting": null,
//           "swap_rollover3days": 0,
//           "marginMaintenance": 0,
//           "marginHedged": 0,
//           "initialMargin": 0,
//           "timeString": "Mon Jul 31 21:59:59 CEST 2023",
//           "shortSelling": true,
//           "currencyPair": false
//       },
//       {
//         "symbol": "ZINC",
//         "currency": "USD",
//         "categoryName": "CMD",
//         "currencyProfit": "USD",
//         "quoteId": 5,
//         "quoteIdCross": 4,
//         "marginMode": 102,
//         "profitMode": 6,
//         "pipsPrecision": 0,
//         "contractSize": 50,
//         "exemode": 1,
//         "time": 1690824548877,
//         "expiration": null,
//         "stopsLevel": 0,
//         "precision": 0,
//         "swapType": 3,
//         "stepRuleId": 6,
//         "type": 912,
//         "instantMaxVolume": 2147483647,
//         "groupName": "Industrial Metals",
//         "description": "Instument CFD which price is based on quotations of Zinc.",
//         "longOnly": false,
//         "trailingEnabled": true,
//         "marginHedgedStrong": false,
//         "swapEnable": true,
//         "percentage": 100,
//         "bid": 2560,
//         "ask": 2573,
//         "high": 2569,
//         "low": 2483,
//         "lotMin": 0.01,
//         "lotMax": 100,
//         "lotStep": 0.01,
//         "tickSize": 1,
//         "tickValue": 50,
//         "swapLong": -0.027273,
//         "swapShort": 0,
//         "leverage": 10,
//         "spreadRaw": 13,
//         "spreadTable": 13,
//         "starting": null,
//         "swap_rollover3days": 0,
//         "marginMaintenance": 0,
//         "marginHedged": 0,
//         "initialMargin": 0,
//         "timeString": "Mon Jul 31 19:29:08 CEST 2023",
//         "shortSelling": true,
//         "currencyPair": false
//     },
//     {
//       "symbol": "UK100",
//       "currency": "GBP",
//       "categoryName": "IND",
//       "currencyProfit": "GBP",
//       "quoteId": 5,
//       "quoteIdCross": 4,
//       "marginMode": 102,
//       "profitMode": 6,
//       "pipsPrecision": 0,
//       "contractSize": 10,
//       "exemode": 1,
//       "time": 1690833599086,
//       "expiration": null,
//       "stopsLevel": 0,
//       "precision": 1,
//       "swapType": 3,
//       "stepRuleId": 2,
//       "type": 935,
//       "instantMaxVolume": 2147483647,
//       "groupName": "Europe",
//       "description": "Instrument CFD which price is based on quotations of the futures contract for FTSE 100 index.",
//       "longOnly": false,
//       "trailingEnabled": true,
//       "marginHedgedStrong": false,
//       "swapEnable": true,
//       "percentage": 100,
//       "bid": 7684.3,
//       "ask": 7686.5,
//       "high": 7708.8,
//       "low": 7639.9,
//       "lotMin": 0.01,
//       "lotMax": 100,
//       "lotStep": 0.01,
//       "tickSize": 0.1,
//       "tickValue": 1,
//       "swapLong": -0.026197,
//       "swapShort": 0,
//       "leverage": 5,
//       "spreadRaw": 2.2,
//       "spreadTable": 2.2,
//       "starting": null,
//       "swap_rollover3days": 0,
//       "marginMaintenance": 0,
//       "marginHedged": 0,
//       "initialMargin": 0,
//       "timeString": "Mon Jul 31 21:59:59 CEST 2023",
//       "shortSelling": true,
//       "currencyPair": false
//   },
//   {
//     "symbol": "EURCZK",
//     "currency": "EUR",
//     "categoryName": "FX",
//     "currencyProfit": "CZK",
//     "quoteId": 5,
//     "quoteIdCross": 4,
//     "marginMode": 101,
//     "profitMode": 5,
//     "pipsPrecision": 2,
//     "contractSize": 100000,
//     "exemode": 1,
//     "time": 1690833851838,
//     "expiration": null,
//     "stopsLevel": 0,
//     "precision": 3,
//     "swapType": 3,
//     "stepRuleId": 4,
//     "type": 981,
//     "instantMaxVolume": 2147483647,
//     "groupName": "Emergings",
//     "description": "Euro to Czech Koruna",
//     "longOnly": false,
//     "trailingEnabled": true,
//     "marginHedgedStrong": false,
//     "swapEnable": true,
//     "percentage": 100,
//     "bid": 23.873,
//     "ask": 23.914,
//     "high": 23.959,
//     "low": 23.823,
//     "lotMin": 0.01,
//     "lotMax": 100,
//     "lotStep": 0.01,
//     "tickSize": 0.001,
//     "tickValue": 100,
//     "swapLong": -0.013831,
//     "swapShort": 0.005501,
//     "leverage": 5,
//     "spreadRaw": 0.041,
//     "spreadTable": 4.1,
//     "starting": null,
//     "swap_rollover3days": 0,
//     "marginMaintenance": 0,
//     "marginHedged": 0,
//     "initialMargin": 0,
//     "timeString": "Mon Jul 31 22:04:11 CEST 2023",
//     "shortSelling": true,
//     "currencyPair": true
// },
// {
//             "symbol": "NEO",
//             "currency": "NEO",
//             "categoryName": "CRT",
//             "currencyProfit": "USD",
//             "quoteId": 5,
//             "quoteIdCross": 4,
//             "marginMode": 101,
//             "profitMode": 5,
//             "pipsPrecision": 0,
//             "contractSize": 1,
//             "exemode": 1,
//             "time": 1690833868584,
//             "expiration": null,
//             "stopsLevel": 0,
//             "precision": 3,
//             "swapType": 3,
//             "stepRuleId": 4,
//             "type": 4024,
//             "instantMaxVolume": 2147483647,
//             "groupName": "Crypto",
//             "description": "Neo",
//             "longOnly": false,
//             "trailingEnabled": true,
//             "marginHedgedStrong": false,
//             "swapEnable": true,
//             "percentage": 100,
//             "bid": 8.46,
//             "ask": 8.806,
//             "high": 8.742,
//             "low": 8.451,
//             "lotMin": 10,
//             "lotMax": 4000,
//             "lotStep": 5,
//             "tickSize": 0.001,
//             "tickValue": 0.001,
//             "swapLong": -0.097222,
//             "swapShort": -0.027778,
//             "leverage": 50,
//             "spreadRaw": 0.346,
//             "spreadTable": 0.346,
//             "starting": null,
//             "swap_rollover3days": 0,
//             "marginMaintenance": 0,
//             "marginHedged": 0,
//             "initialMargin": 0,
//             "timeString": "Mon Jul 31 22:04:28 CEST 2023",
//             "shortSelling": true,
//             "currencyPair": true
//         },
//   ]
  if (type === 'commodities') {
      const comData = returnData.filter((item: any) => item.categoryName.toLowerCase() === "cmd").map((item: any) => ({
        id: item.groupName,
        key: uuidv4(),
        label: <DataLabel item={item} />,
        children: <DataChild item={item} />,
        showArrow: false,
      }))
    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
      {
        key: '1',
        label: 'Agriculture',
        children:
          <Collapse
            accordion
            className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
            bordered={false}
            items={comData.filter((item: any) => item.id === 'Agriculture')}
          />,
        style: panelStyle,
      },
      {
        key: '2',
        label: 'Energy',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Energy')}
        />,
        style: panelStyle,
      },
      {
        key: '3',
        label: 'Industrial metals',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Industrial Metals')}
        />,
        style: panelStyle,
      },
      {
        key: '4',
        label: 'Precious Metals',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Precious Metals')}
        />,
        style: panelStyle,
      },
      {
        key: '5',
        label: 'Other',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Other')}
        />,
        style: panelStyle,
      },
      {
        key: '6',
        label: 'Livestock',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Livestock')}
        />,
        style: panelStyle,
      },
    ];
    return (<DataRender items={getItems(panelStyle)} />)
  }
  if (type === 'stock') {
    const comData = returnData.filter((item: any) => item.categoryName.toLowerCase() === "stc").map((item: any) => {
      return {
        id: item.groupName,
        key: uuidv4(),
        label: <DataLabel item={item} />,
        children: <DataChild item={item} />,
        showArrow: false,
      }
    })
    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
      {
        key: uuidv4(),
        label: 'US',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'US')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'UK',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'UK')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'France',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'France')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Belgium',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Belgium')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Czech Rep.',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Czech Rep.')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Denmark',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Denmark')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Finland',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Finland')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Germany',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Germany')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Italy',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Italy')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Netherlands',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Netherlands')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Norway',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Norway')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Portugal',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Portugal')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Spain',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Spain')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Sweden',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Sweden')}
        />,
        style: panelStyle,
      },
      {
        key: uuidv4(),
        label: 'Switzerland',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Switzerland')}
        />,
        style: panelStyle,
      },
    ]
    return (<DataRender items={getItems(panelStyle)} />)
  }
  if (type === 'forex') {
    const comData = returnData.filter((item: any) => item.categoryName.toLowerCase() === "fx").map((item: any) => ({
      id: item.groupName,
      key: uuidv4(),
      label: <DataLabel item={item} />,
      children: <DataChild item={item} />,
      showArrow: false,
    }))
    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
      {
        key: '1',
        label: 'Major',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Major')}
        />,
        style: panelStyle,
      },
      {
        key: '2',
        label: 'Minor',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Minor')}
        />,
        style: panelStyle,
      },
      {
        key: '3',
        label: 'Emerging',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Emergings')}
        />,
        style: panelStyle,
      },
    ];
    return (<DataRender items={getItems(panelStyle)} />)
  }
  if (type === 'crypto') {
    const comData = returnData.filter((item: any) => item.categoryName.toLowerCase() === "crt").map((item: any) => ({
      id: item.groupName,
      key: uuidv4(),
      label: <DataLabel item={item} />,
      children: <DataChild item={item} />,
      showArrow: false,
    }))
    return (<DataRender items={comData} />)
  }
  if (type === 'indices') {
    const comData = returnData.filter((item: any) => item.categoryName.toLowerCase() === "ind").map((item: any) => ({
      id: item.groupName,
      key: uuidv4(),
      label: <DataLabel item={item} />,
      children: <DataChild item={item} />,
      showArrow: false,
    }))
    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
      {
        key: '1',
        label: 'Americas',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Americas')}
        />,
        style: panelStyle,
      },
      {
        key: '2',
        label: 'Asia-Pacific',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Asia-Pacific')}
        />,
        style: panelStyle,
      },
      {
        key: '3',
        label: 'Europe',
        children: <Collapse
          accordion
          className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
          bordered={false}
          items={comData.filter((item: any) => item.id === 'Europe')}
        />,
        style: panelStyle,
      },
    ];
    return (<DataRender items={getItems(panelStyle)} />)
  }
  return <div> No show  </div>
};

export default AssetWatchItem;