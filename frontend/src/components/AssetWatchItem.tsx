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
  // const {data} = useWebSocket('streamCandles')
  // if (data) {
  //   console.log(data)
  // }
  const { returnData } = useWebSocket('getAllSybmols')
  if (!returnData ) return <div> loading </div>
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