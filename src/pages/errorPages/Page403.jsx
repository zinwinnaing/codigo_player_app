import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Page403 = () => {
  let history = useNavigate();
  return (
    <Result
      className="my-5"
      status="403"
      title="403"
      subTitle="Nice try, you do not have permission to access this page."
      extra={
        <Button type="primary" onClick={() => history.goBack()}>
          Go back
        </Button>
      }
    />
  );
};

export default Page403;
