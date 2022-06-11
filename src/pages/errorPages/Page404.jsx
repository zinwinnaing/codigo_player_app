import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const history = useNavigate();
  return (
    <Result
      className="my-5"
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => history.push("/")}>
          Go back
        </Button>
      }
    />
  );
};

export default Page404;
