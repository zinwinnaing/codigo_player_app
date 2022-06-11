import { Col, Row } from "antd";
import React from "react";
import LoginForm from "./components/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div>
      <div className={styles.loginPanel}>
        <Row className={styles.content}>
          <Col span={12} className={styles.secondCol}>
            <div className={styles.form}>
              <h1>signIn</h1>
              <LoginForm />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
