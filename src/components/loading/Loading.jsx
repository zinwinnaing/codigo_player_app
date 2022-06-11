import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

// const Loading = () => (
//   <div className="d-flex justify-content-center align-items-center pt-5">
//     <Spin size="large" />
//   </div>
// );
// export default Loading;
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 50,
      color: "white",
    }}
    spin
  />
);
const Loading = ({ children, load }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin indicator={antIcon} />
    </div>
  );
};
export default Loading;
