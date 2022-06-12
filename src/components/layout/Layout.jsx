import { Button, Layout } from "antd";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { authSelector, logout } from "../../services/authSlice";
import { LOGIN_LABEL } from "../../variables/constants";
import styles from "./Layout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

const { Header, Content } = Layout;

const AppLayout = ({ children, title }) => {
  const user_name = localStorage.getItem(LOGIN_LABEL);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(authSelector);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated === false) {
      if (_.isEmpty(user_name)) {
        history.push("/");
      }
    }
  }, [isAuthenticated, history, user_name]);

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
              <div className={styles.navLink}>
                <Button
                  type="link"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Log out
                </Button>
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
