import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { 
  Button,
  Layout,
  Menu,
  Tabs,
  Row,
  Col,
  Switch,
  Space
} from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  CheckOutlined,
  CloseOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps, RadioChangeEvent } from 'antd';
import Stonk from '@/components/Stonk';

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
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),

  getItem('Files', '9', <FileOutlined />),
];


// const triggerComponenet = () => (<h1 className='bg-lightGray'> hello</h1>);

const  Home = () => {
  const router = useRouter()
  const [user, setUser] = useState<{username: string} | null>(null)
  const [collapsed, setCollapsed] = useState(true)

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }
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
          <Sider className='bg-lightGray' style={{ backgroundColor: '#E8E8E8' }}collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className='flex flex-col justify-between h-full'>
              <div>logo</div>
            <Menu className='bg-colorPrimary' defaultSelectedKeys={['1']} mode="inline" items={items} />

            </div>
            </Sider>
          <Layout className='bg-white' style={{ width: '100%', padding: '0 16px' }}>
          <Content style={{ background: 'bg-lightGray', minHeight:'100vh' }}>
              <Row justify="space-between">
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
        
        
              <Stonk />
            
            <Tabs
              defaultActiveKey="1"
              tabPosition="top"
              style={{ height: 100, color: '#fff' }}
              className='bg-lightGray'
              items={new Array(3).fill(null).map((_, i) => {
                const id = String(i);
                return {
                  label: `Tab-${id}`,
                  key: id,
                  disabled: i === 28,
                  children: `Content of tab ${id}`,
                };
              })}
            />
            <div>
              <Button type="primary"  onClick={handleLogout}> Logout </Button>
            </div>
            </Content>
          </Layout>
        </Layout>
      </main>
    )  
  }
  return;
 }

 export default Home;
