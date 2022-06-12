import React from "react";
import { Button } from "antd";

const OptionButton = ({ onClick, className, type, label, htmlType }) => {
  return (
    <Button
      htmlType={htmlType}
      onClick={onClick}
      className={className}
      type={type}
    >
      {label}
    </Button>
  );
};

export default OptionButton;
