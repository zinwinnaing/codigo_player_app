import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPlayer } from "../../services/playerSlice";
import LoginForm from "./components/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayer({ page: 0, size: 9999 }));
  }, []);

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
