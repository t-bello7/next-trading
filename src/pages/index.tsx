import { useRouter } from 'next/router'
import { useRef, useEffect, useState } from 'react'
import { 
  Button,
  Layout,
  Menu,
  Tabs,
  Row,
  Col,
  Switch,
} from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Stonk from '@/components/Stonk';
import useWindowSize from "@/utils/hooks/dimesions";


const { Header, Content, Footer, Sider } = Layout;

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

const items: MenuItem[] = [
  getItem('Profile', '2', <DesktopOutlined />),
  getItem('Logout', '9', <FileOutlined />),
];

const tradingAssets  = [{
  label: 'Stocks (stc)',
  key: '2132#',
  disabled: false,
  children: `Content of stock`,
},
{
  label: 'Commodities (cmd)',
  key: '2112#',
  disabled: false,
  children: `Content of Commodities`,
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

const  Home = () => {
  const [width, setwidth] = useState(0)
  const router = useRouter()
  const [user, setUser] = useState<{username: string} | null>(null)
  const [collapsed, setCollapsed] = useState(true)

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }
  let { width: windowWidth } : { width: number | undefined} = useWindowSize();
  
  useEffect(() => {
      if (windowWidth > 900){
        setwidth(windowWidth * 0.3);
      }else {
      setwidth(windowWidth-100)

      }
  }, [windowWidth])

  console.log(width);
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
        <Layout>
          <Sider className='bg-lightGray' style={{ backgroundColor: '#E8E8E8' }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className='flex flex-col justify-between h-full'>
              <div>logo</div>
            <Menu className='bg-colorPrimary' defaultSelectedKeys={['1']} mode="inline" items={items} />
            </div>
            </Sider>
          <Layout className='bg-white' style={{ width: '100%', padding: '0 16px' }}>
          <Content style={{ background: 'bg-lightGray', minHeight:'100vh' }}>
              <Row justify="space-between" style={{ height: 100}}>
                <Col>
                Welcome&nbsp;
                <code className="font-mono font-bold">{user.username}</code>'
                </Col>
                <Col>
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                />
                <Button className='bg-darkBlack text-white'>
                  Deposit
                </Button>
                </Col>
              </Row>
{/*         
        justify space between -desktop
        justify center - mobile
        flex row - desktop
        flex col- mobile */}
            <Row className='justify-center lg:justify-between'>
              <Col xl={12}>
                <Stonk />
              </Col>
              <Col style={{ width: width }}>
                <Tabs
                  defaultActiveKey="1"
                  tabPosition="top"
                  style={{ height: 200, color: '#fff' }}
                  className='bg-lightGray'
                  items={tradingAssets}
                />
                <Row justify="space-between">
                  <Button className='bg-colorPrimary'>
                    Buy
                  </Button>
                  <Button className='bg-secondaryColor'>
                    Sell
                  </Button>
                </Row>
              </Col>
            </Row>
    
            </Content>
          </Layout>
        </Layout>
      </main>
    )  
  }
  return;
 }

 export default Home;
