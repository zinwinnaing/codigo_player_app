import React from "react";
import { Form, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import Field from "../../../components/fields/Field";
import { loginSchema } from "../../../components/fields/ValidationSchema";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(data) => {
        console.log("data", data);
      }}
    >
      {({ handleSubmit }) => (
        <Form name="loginForm" onFinish={handleSubmit}>
          <Field
            name="identifier"
            id="identifier"
            label="phoneNumberOrEmail"
            placeholder="enterPhoneNumberOrEmail"
            type="text"
            prefixIcon={<UserOutlined />}
          />

          <Form.Item className="my-1">
            <Button type="primary" htmlType="submit" block className="bg-brand">
              Login
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
