import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

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
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];


const  Home = () => {
  const router = useRouter()
  const [user, setUser] = useState<{username: string} | null>(null)
  const [collapsed, setCollapsed] = useState(true)

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
      <main className="bg-dark">
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical"></div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
          </Sider>
          <Layout style={{ padding: '0 16px', background: '#000' }}>
            <div className="">
              <p className="">
                Welcome&nbsp;
                <code className="font-mono font-bold">{user.username}</code>
              </p>
            </div>
            <Content >
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