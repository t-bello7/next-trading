import { useState } from "react";
import Image from "next/image";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LogoutOutlined,} from '@ant-design/icons';
import type { MenuProps } from 'antd';

import logo from "../assets/images/logo-light.png";

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


const items: MenuItem[] = [
  getItem('Profile', '2', <UserOutlined />),
  getItem('Logout', '9', <LogoutOutlined rotate={180} />),
];


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Sider style={{ backgroundColor: '#E8E8E8' }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Image src={logo} alt="assetxpro logos" />
            <Menu className="font-clashDisplay" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
};

export default Sidebar;