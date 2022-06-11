import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.scss";
const { Header, Content } = Layout;

const AppLayout = ({ children }) => (
  <Layout className={styles.layout}>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item>
          <Link to="/players">Player</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/teams">Team</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content
      className="px-lg-4 px-sm-2 pb-4 overflow-auto bg-grey"
      style={{ height: "calc(100vh - 65px)" }}
    >
      {children}
    </Content>
  </Layout>
);

export default AppLayout;
