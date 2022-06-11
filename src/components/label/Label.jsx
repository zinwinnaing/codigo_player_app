import React from "react";
import classNames from "classnames";
import { Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import styles from "./Label.module.scss";

const Label = ({ id, tooltip, label, isRequired }) => (
  <label
    htmlFor={id}
    className={classNames(isRequired && styles.required, "text-bold")}
  >
    {tooltip ? (
      <span>
        {label}
        &nbsp;
        <Tooltip title={tooltip}>
          <QuestionCircleOutlined />
        </Tooltip>
      </span>
    ) : (
      <>{label}</>
    )}
  </label>
);
export default Label;
