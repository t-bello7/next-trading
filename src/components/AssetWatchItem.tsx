import { useState } from 'react';
import { Collapse, Button } from 'antd';
import { CaretRightOutlined, DownloadOutlined } from '@ant-design/icons';
import type { CSSProperties } from 'react';
import type { CollapseProps } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

const panelStyle = {
    marginBottom: 24,
    border: 'none',
    color: '#000',
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const AssetWatchItem = () => {
  const [size, setSize] = useState<SizeType>('large');

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <div>
                <Button type="primary" shape="round" className='bg-colorPrimary font-clashDisplay' icon={<DownloadOutlined />} size={size}>
                    Buy
                  </Button>
                  <Button type="primary" shape="round" className='bg-secondaryColor font-clashDisplay' icon={<DownloadOutlined />} size={size}>
                    Sell
                  </Button>
  
      </div>,
      style: panelStyle,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <div>
      <Button type="primary" shape="round" className='bg-colorPrimary font-clashDisplay' icon={<DownloadOutlined />} size={size}>
          Buy
        </Button>
        <Button type="primary" shape="round" className='bg-secondaryColor font-clashDisplay' icon={<DownloadOutlined />} size={size}>
          Sell
        </Button>

</div>,
      style: panelStyle,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <div>
      <Button type="primary" shape="round" className='bg-colorPrimary font-clashDisplay' icon={<DownloadOutlined />} size={size}>
          Buy
        </Button>
        <Button type="primary" shape="round" className='bg-secondaryColor font-clashDisplay' icon={<DownloadOutlined />} size={size}>
          Sell
        </Button>

</div>,
      style: panelStyle,
    },
  ];
  
    return (
        <Collapse
        accordion
        className='p-4'
        bordered={false}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        items={getItems(panelStyle)}
      />
      )

};

export default AssetWatchItem;