import { useState } from "react";
import { useTheme } from 'next-themes';
import Image from "next/image";
import { signOut } from 'next-auth/react';
import Link from 'next/link'
import { Layout, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
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
  const items: MenuItem[] = [
    getItem(<Link href='/profile'>Profile </Link>, '2', <UserOutlined />),
    getItem(<span onClick={() => signOut()}>Logout</span>, '9', <LogoutOutlined rotate={180} />),
  ];

    return (
        <Sider
        className="bg-lightGray dark:bg-darkBlack [&>.ant-layout-sider-trigger]:bg-darkBlack [&>.ant-layout-sider-trigger]:text-white [&>.ant-layout-sider-trigger]:dark:bg-white [&>.ant-layout-sider-trigger]:dark:text-darkBlack" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Link href='/'>
            {
              theme !== 'dark' ? (<Image src={logo} alt="assetxpro logos" />)
              :(<Image src={darkLogo} alt="assetxpro logos" />)

            }
            </Link>
            <Menu className="bg-lightGray dark:bg-darkBlack dark:text-white font-clashDisplay" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
};

export default Sidebar;