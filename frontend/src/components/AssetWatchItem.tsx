import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Collapse, Spin } from 'antd';
import type { CSSProperties } from 'react';
import type { CollapseProps } from 'antd';
import { DataLabel, DataChild, DataRender } from './molecules/AssetCollapse';
import { useWebSocket } from '@/hooks/useWebSocket';
import { groupBy } from '@/hooks/util-func';

const panelStyle = {
  border: 'none'
};

const AssetWatchItem = ({ type }: any) => {
  const { returnData } = useWebSocket('getAllSybmols')
  if (!returnData) return <Spin size="large" className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[50%]'/>

  const getItems: (paneStyle:CSSProperties, data:[]) =>  CollapseProps['items'] = (panelStyle, data) => {
   const newGroup = groupBy(data,"id")
    return Object.keys(newGroup).map((item) => {
      return (
        {
          key: uuidv4(),
          label: item,
          children:
            <Collapse
              accordion
              className='[&_.ant-collapse-header]:text-darkBlack [&_.ant-collapse-header]:dark:text-white'
              bordered={false}
              items={newGroup[item]}
            />,
            style: panelStyle
        }
      )
    })
  }
  const groupReturnData = groupBy(returnData, 'categoryName')
  const data = groupReturnData[type]
return <>
  <DataRender items={getItems(panelStyle, data.map((item: any)=> ({
    id: item.groupName,
    key: uuidv4(),
    label: <DataLabel item={item} />,
    children: <DataChild item={item} />,
    showArrow: false,
  })))} /> 
  </>
};

export default AssetWatchItem;