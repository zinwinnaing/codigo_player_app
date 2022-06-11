import { Card, Col, Row } from "antd";
import React from "react";
import LoginForm from "./components/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.loginPanel}>
      <Row>
        <Card className={styles.loginForm}>
          <Col>
            <div className={styles.form}>
              <h1 className="text-center">Sign In</h1>
              <LoginForm />
            </div>
          </Col>
        </Card>
      </Row>
    </div>
  );
};

export default Login;
