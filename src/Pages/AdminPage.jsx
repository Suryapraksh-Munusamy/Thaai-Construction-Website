import React, { useState } from "react";
import {
  UserOutlined,
  SettingOutlined,
  ProjectOutlined,
  FileImageOutlined,
  MenuOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Dropdown, Drawer } from "antd";
import { Link } from "react-router-dom";
import "../css/AdminPage.css";

const { Header, Sider } = Layout;

const AdminPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onDropdownClick = ({ key }) => {
    if (key === "selectAll") console.log("Select All");
    if (key === "deleteAll") console.log("Delete All");
  };

  const dropdownMenu = (
    <Menu onClick={onDropdownClick}>
      <Menu.Item key="selectAll">Select All</Menu.Item>
      <Menu.Item key="deleteAll">Delete All</Menu.Item>
    </Menu>
  );

  const renderMenu = () => (
    <>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/users">USERS</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>SLIDESHOW</Menu.Item>
        <Menu.Item key="4" icon={<ProjectOutlined />}>PROJECT</Menu.Item>
        <Menu.Item key="5" icon={<FileImageOutlined />}>GALLERY</Menu.Item>
      </Menu>
      <div className="admin-settings">
      <Menu theme="dark" mode="inline" selectable={false}>
        <Menu.Item key="6" icon={<SettingOutlined />}>SETTINGS</Menu.Item>
      </Menu>
    </div>
    </>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* DESKTOP SIDEBAR */}
      <Sider
        className="admin-sider"
        breakpoint="md"
        collapsedWidth="0"
        trigger={null}
        width={200}
      >
        <div className="admin-logo">Admin Panel</div>
        {renderMenu()}
        <div className="admin-actions desktop-only">
          <Dropdown overlay={dropdownMenu} trigger={["click"]}>
            <Button type="text" icon={<MoreOutlined />} />
          </Dropdown>
        </div>
      </Sider>

      {/* MOBILE DRAWER */}
      <Drawer
        title="Admin Panel"
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        className="mobile-drawer"
      >
        {renderMenu()}
      </Drawer>

      {/* MAIN CONTENT */}
      <Layout>
        <Header className="admin-header">
          <nav className="admin-navbar">
            <Button
              className="hamburger mobile-only"
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerOpen(true)}
            />
            <span className="admin-welcome">Welcome, Admin</span>
            <div className="admin-actions mobile-only">
              <Dropdown overlay={dropdownMenu} trigger={["click"]}>
                <Button type="text" icon={<MoreOutlined />} />
              </Dropdown>
            </div>
          </nav>
        </Header>

        
      </Layout>
    </Layout>
  );
};

export default AdminPage;