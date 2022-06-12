import { Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { LOGIN_LABEL } from "../../variables/constants";
import styles from "./Layout.module.scss";
const { Header, Content } = Layout;

const AppLayout = ({ children, title }) => {
  const user_name = localStorage.getItem(LOGIN_LABEL);
  return (
    <Layout className={styles.layout}>
      <Header>
        <nav>
          <div className="d-flex justify-content-between">
            <div className="text-white">{user_name}</div>
            <div className="d-flex">
              <div className={styles.navLink}>
                <Link to="/players">Player</Link>
              </div>
              <div className={styles.navLink}>
                <Link to="/teams">Team</Link>
              </div>
            </div>
          </div>
        </nav>
      </Header>
      <Content
        className="px-lg-4 px-sm-2 pb-4 overflow-auto bg-grey"
        style={{ height: "calc(100vh - 65px)" }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default AppLayout;
