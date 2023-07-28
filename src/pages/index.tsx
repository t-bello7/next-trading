import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { 
  Button,
  Layout,
  Tabs,
  Row,
  Col,
  Switch,
  Collapse
} from 'antd';
import Icon, {
  DownloadOutlined,
  CaretRightOutlined
} from '@ant-design/icons';
import type { MenuProps, CollapseProps } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { CSSProperties } from 'react';
import React from 'react';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Stonk from '@/components/Stonk';
import Sidebar from '@/components/Sidebar';
import useWindowSize from "@/utils/hooks/dimesions";

const { Header, Content, Footer } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

const panelStyle = {
  marginBottom: 24,
  border: 'none',
};

const tradingAssets  = [{
  label: 'Stocks (stc)',
  key: '2132#',
  disabled: false,
  children: `Contents of Stock`
},
{
  label: 'Commodities (cmd)',
  key: '2112#',
  disabled: false,
  children: < Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    items={getItems(panelStyle)}
  />,
},
{
  label: 'Forex (fx)',
  key: '1132#',
  disabled: false,
  children: `Content of Forex`,
},
{
  label: 'Crypto (ct)',
  key: '2332#',
  disabled: false,
  children: `Content of Crypto`,
},
{
  label: 'Indices (ind)',
  key: '1131#',
  disabled: false,
  children: `Content of Indice`,
},
]

const lightSvg = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true" viewBox="15 15 100 100"><path fill="#f17900" d="m78.42 43.31-30.7.08-5 19.62 5 2.54s-.24-4.42 1.98-8.66c2.22-4.24 6.63-8.37 14.36-8.25 15.08.23 15.68 17.13 15.68 17.13s9.99-6.6 8.53-8.45c-1.47-1.85-9.85-14.01-9.85-14.01z"/><path fill="#f17900" d="M35.25 61.01s-1.32 9.52 3.92 18.39c3.85 6.51 11.08 13.3 24.08 13.54 12.16.23 20.89-6.15 24.93-13.47 4.71-8.54 3.85-17.93 3.85-17.93S81.42 74.4 80.65 75.32c-.77.92-16.16 8.77-16.16 8.77s-12.77-.38-13.7-2.69c-.92-2.31-15.54-20.39-15.54-20.39z"/><path fill="#ffa624" d="M64.05 35.46c-21.54-.11-29.18 17.34-28.96 27.86.25 11.88 8.04 26.74 28.35 26.74 20.18 0 28.47-15.97 28.72-27.98.14-7.18-5.21-26.49-28.11-26.62zm15.6 29.71c-.5 9.66-8.42 14.98-16.34 14.98-7.8 0-15.47-6.19-15.6-16.34-.14-11.27 6.81-17.74 16.34-17.45 12.26.37 16.06 9.91 15.6 18.81z"/><path fill="#f17900" d="M58.03 20.71s-1.22 8.08 6.17 8.16c7.21.07 6.44-7.11 6.44-7.11l-3.75-7.66-8.86 6.61zM109.14 21.09s3.29 4.34-1.35 9.09c-3.22 3.29-9.16 8.77-10.51 9.98-2.13 1.9-5.92 2.07-8.56-.27-3.49-3.09-1.11-7.68-1.11-7.68l21.53-11.12zM99.5 63.19c-.14 2.26.26 7 4.89 7.31 4.53.31 14.45.45 16.41.23s4.08-2.27 4.31-5.22c.21-2.79-1.08-5.06-1.38-5.14-.3-.08-24.23 2.82-24.23 2.82zM89.16 89.48s-2.89 1.9-2.84 5.32c.05 2.94 2.41 4.9 6.87 9.28 4.46 4.39 6.43 5.82 9.53 5.98 3.18.16 5.52-2.45 5.82-4.76.43-3.36-.85-4.62-.85-4.62l-18.53-11.2zM57.42 118.15s-.75 7.14 5.75 7.25c6.88.11 6.35-7.32 6.35-7.32l-6.73-3.03-5.37 3.1zM17.96 104.07s-.25 2.58 2.02 4.62c1.59 1.43 4.33 2.11 7.2.68 3.19-1.6 6.87-6.07 8.83-8.19 1.97-2.12 5.21-5.73 3.63-9.21-1.37-3.02-2.86-2.99-2.86-2.99l-18.82 15.09zM2.74 62.32s-1.02 7.39 3.96 7.96c5.3.6 14.66.51 17.22.3 3.78-.3 4.85-4.05 4.64-8.4-.16-3.28-13.26-.68-13.26-.68l-12.56.82zM21.77 18.87s-5.71 2.96-2.67 8.53c2.51 4.6 10.33 12.19 12.57 13.44 3.11 1.73 6.32.49 7.8-1.23 2.34-2.72 1.08-6.36 1.08-6.36L21.77 18.87z"/><radialGradient id="a" cx="66.606" cy="-1.32" r="27.906" gradientUnits="userSpaceOnUse"><stop offset=".426" stop-color="#ffa624"/><stop offset=".816" stop-color="#ff8c0c"/></radialGradient><path fill="url(#a)" d="M64.38 1.75c-3.31 0-6.05 2.27-6.28 5.37-.23 3.1-.16 12.72-.11 14.17.05 1.45 2.05 4.08 6.12 4.18 5.05.12 6.59-3.24 6.59-3.24s-.12-12.92-.12-14.81-1.13-5.67-6.2-5.67z"/><radialGradient id="b" cx="105.968" cy="17.562" r="23.984" gradientUnits="userSpaceOnUse"><stop offset=".426" stop-color="#ffa624"/><stop offset=".816" stop-color="#ff8c0c"/></radialGradient><path fill="url(#b)" d="M99.3 21.03c-2.24 1.89-9.64 8.01-11.42 10.63-1.11 1.63-1.4 4.4.97 6.28 1.7 1.36 5.67 1.53 8.08-.45s9.31-8.47 11.19-10.77c1.5-1.83 2.77-4.37-.06-6.88-2.82-2.51-6.31-.88-8.76 1.19z"/><radialGradient id="c" cx="122.282" cy="63.341" r="21.124" gradientUnits="userSpaceOnUse"><stop offset=".316" stop-color="#ffa624"/><stop offset=".816" stop-color="#ff8c0c"/></radialGradient><path fill="url(#c)" d="M104.51 58.22c-2.51.25-5.02 2.2-5.02 5.02s1.88 4.5 6.06 4.71c4.18.21 12.23.1 14.74 0 2.61-.1 4.38-2.5 4.29-5.33-.1-3.35-3.24-4.29-5.96-4.39-2.72-.12-12.02-.22-14.11-.01z"/><radialGradient id="d" cx="103.915" cy="105.065" r="18.691" gradientUnits="userSpaceOnUse"><stop offset=".426" stop-color="#ffa624"/><stop offset=".816" stop-color="#ff8c0c"/></radialGradient><path fill="url(#d)" d="M89.06 89.53c-1.7 1.53-3 4.57 1.17 8.59 4.18 4.02 7.58 7.63 11.12 9.08 2.3.94 3.93.79 5.9-1.25 1.31-1.36 1.6-3.78.26-5.59-2.66-3.6-9.51-9.83-12.32-11.33-2.46-1.3-4.52-.96-6.13.5z"/><radialGradient id="e" cx="63.375" cy="119.873" r="17.49" gradientUnits="userSpaceOnUse"><stop offset=".426" stop-color="#ffa624"/><stop offset=".816" stop-color="#ff8c0c"/></radialGradient><path fill="url(#e)" d="M63.49 100c-3.35 0-6.02 2.55-6.13 6.53s-.05 10.09 0 11.69c.05 1.6 2.8 4.01 5.92 4.05 4.46.06 6.25-2.86 6.24-4.19-.01-1.27-.04-9.83-.01-11.42.06-3.21-2.16-6.66-6.02-6.66z"/><radialGradient id="f" cx="19.928" cy="105.534" r="20.72" gradientUnits="userSpaceOnUse"><stop offset=".426" stop-color="#ffa624"/><stop offset=".816" stop-color="#ff8c0c"/></radialGradient><path fill="url(#f)" d="M37.65 89.34c-2.07-1.51-5.39-1.81-8.88 1.46-3.49 3.27-8.32 8.1-9.39 9.61-1.08 1.51-2.25 4.36-.6 6.2 1.72 1.94 5.73 1.62 8.36-.66 2.63-2.28 9.56-9.63 11.21-12.09 1.37-2.07 1.11-3.2-.7-4.52z"/><radialGradient id="g" cx="2.188" cy="63.137" r="25.214" gradientUnits="userSpaceOnUse"><stop offset=".426" stop-color="#ffa624"/><stop offset=".816" stop-color="#ff8c0c"/></radialGradient><path fill="url(#g)" d="M8.4 57.82c-2.82.08-5.74 1.8-5.78 5.2-.04 3.4 2.6 4.7 5.35 4.85s13.24.39 15.84.18c2.6-.22 4.46-2.06 4.75-5.02s-2.24-4.62-4.91-4.91c-2.67-.3-12.65-.37-15.25-.3z"/><radialGradient id="h" cx="24.009" cy="21.372" r="20.76" gradientUnits="userSpaceOnUse"><stop offset=".426" stop-color="#ffa624"/><stop offset=".816" stop-color="#ff8c0c"/></radialGradient><path fill="url(#h)" d="M21.48 19.09c-1.81 1.61-2.48 4.55.05 7.87 3.27 4.3 8.63 9.3 10.53 10.77 2.24 1.73 5.42 1.74 7.41-.65 1.6-1.92 1.81-3.9-.94-7.3s-8.46-9.18-9.9-10.48c-1.86-1.68-5.2-1.95-7.15-.21z"/></svg>
)

const darkSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="rotate-45" width="1em" height="1em" viewBox="30 30 110 180"><path d="M165.766 195.725c-35.375-16.164-59.835-50.859-59.835-91.058 0-40.197 24.458-74.89 59.829-91.055 5.525-2.525 4.525-10.616-1.442-11.755A105.356 105.356 0 0 0 142.641.018C114.937.524 89.84 11.923 71.389 30.044c3.394 2.874 5.555 7.16 5.555 11.956 0 8.653-7.014 15.667-15.667 15.667-3.227 0-6.225-.978-8.717-2.65-8.195 15.088-12.794 32.365-12.624 50.644.533 57.348 47.188 103.673 104.662 103.673 6.737 0 13.325-.637 19.708-1.854 5.975-1.141 6.994-9.227 1.46-11.755zM87.277 156c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"/></svg>
)

const BrightButtonIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={lightSvg} {...props} />
);

const DarkMoonIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={darkSvg} {...props} />
);

const  Home = () => {
  const [size, setSize] = useState<SizeType>('large'); 
  const [width, setwidth] = useState(0)
  const router = useRouter()
  const [user, setUser] = useState<{username: string} | null>(null)

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }
  let { width: windowWidth } : { width: number } = useWindowSize();
  
  useEffect(() => {
      if (windowWidth > 900){
        setwidth(windowWidth * 0.3);
      }else {
      setwidth(windowWidth-100)

      }
  }, [windowWidth])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage){
    const user = localStorage.getItem('user');
    if (user === null) {
      router.push('/login')
    } else {
      setUser(JSON.parse(user))
    }
  }
  }, [router])

  if (user) {
    return (
      <main>
        <Layout style={{ minHeight: '100vh', overflow: 'auto'}}>
          <Sidebar />
          <Layout className='bg-white p-8 rounded-lg' style={{minHeight:'95vh', margin: '20px 16px' }}>
            <Row justify="space-between" className='mb-8'>
              <Col className='font-clashDisplay'>
              <span>Welcome </span> <br />

              <code className='font-bold'>{user.username}</code>
              </Col>
              <Col className='flex gap-2 items-center'>
                <Switch
                  className='bg-lightGray'
                  style={{ transform: 'rotate(90deg)',  backgroundColor: '#E8E8E8'}}
                  checkedChildren={<BrightButtonIcon />}
                  unCheckedChildren={<DarkMoonIcon />}
                  defaultChecked
                />
                <span className='font-clashDisplay'>
                  $ 140.00
                </span>
                <Button type="primary" shape="round" className='font-clashDisplay bg-darkBlack' icon={<DownloadOutlined />} size={size}>
                  Deposit
                </Button>
              </Col>
            </Row>
            <Row className='justify-center lg:justify-between'>
              <Col xl={12}>
                <Stonk />
              </Col>
              <Col style={{ width: width }}>
                <Tabs
                  defaultActiveKey="1"
                  tabPosition="top"
                  style={{ height: 200 }}
                  className='bg-lightGray rounded-lg font-clashDisplay'
                  items={tradingAssets}
                />
                <Row justify="space-between">
                <Button type="primary" shape="round" className='bg-colorPrimary font-clashDisplay' icon={<DownloadOutlined />} size={size}>
                  Buy
                </Button>
                <Button type="primary" shape="round" className='bg-secondaryColor font-clashDisplay' icon={<DownloadOutlined />} size={size}>
                  Sell
                </Button>
                </Row>
              </Col>
            </Row>
          </Layout>
        </Layout>
      </main>
    )  
  }
  return;
 }

 export default Home;
