import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';

import { useRouter } from 'next/router';
import Image from "next/image";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LogoutOutlined,} from '@ant-design/icons';
import type { MenuProps } from 'antd';

import logo from "../assets/images/logo-light.png";
import darkLogo from "../assets/images/logo.png"

const { Sider } = Layout;

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




const Sidebar = () => {
  const { theme } = useTheme();

  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter()
  const handleLogout = () => {
    console.log('yead')
    localStorage.removeItem('user')
    router.push('/login')
  }
  const [user, setUser] = useState<{username: string} | null>(null)

  const items: MenuItem[] = [
    getItem('Profile', '2', <UserOutlined />),
    getItem(<span onClick={handleLogout}>Logout</span>, '9', <LogoutOutlined rotate={180} />),
  ];
  
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
    return (
        <Sider
        className="bg-lightGray dark:bg-darkBlack [&>.ant-layout-sider-trigger]:bg-darkBlack [&>.ant-layout-sider-trigger]:text-white [&>.ant-layout-sider-trigger]:dark:bg-white [&>.ant-layout-sider-trigger]:dark:text-darkBlack" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            {
              theme !== 'dark' ? (<Image src={logo} alt="assetxpro logos" />)
              :(<Image src={darkLogo} alt="assetxpro logos" />)

            }
            <Menu className="bg-lightGray dark:bg-darkBlack dark:text-white font-clashDisplay" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
};

export default Sidebar;