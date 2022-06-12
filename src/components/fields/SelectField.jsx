/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Field as FormikField } from "formik";
import { Select, Form, Button, Input } from "antd";
import _ from "lodash";
import classNames from "classnames";
import { PlusOutlined } from "@ant-design/icons";
import Label from "../label/Label";

const { Option } = Select;

const renderField = ({
  name,
  id,
  label,
  placeholder,
  isRequired,
  field,
  form: { setFieldValue, errors, touched, ...form },
  options,
  disabled,
  mode,
  onSelect,
  onSearch,
  tooltip,
  loading,
  onClear,
  language,
  defaultValue,
  onClick,
}) => {
  return (
    <>
      <Form.Item
        validateStatus={touched[field.name] && errors[field.name] && "error"}
        help={touched[field.name] && errors[field.name]}
      >
        {label && (
          <Label
            tooltip={tooltip}
            htmlFor={id}
            label={label}
            isRequired={isRequired}
          />
        )}
        <Input.Group compact>
          <Select
            {...field}
            mode={mode || "single"}
            placeholder={placeholder}
            name={name}
            id={id}
            value={field?.value}
            showSearch
            loading={loading}
            style={onClick ? { width: "calc(100% - 32px)" } : { width: "100%" }}
            defaultValue={defaultValue}
            allowClear
            className="mt-1"
            onSelect={onSelect}
            onSearch={onSearch}
            onClear={onClear}
            onChange={(e) => {
              setFieldValue(field.name, e);
            }}
            filterOption={false}
            disabled={disabled}
          >
            {_.map(options, (p) => {
              return (
                <Option key={p.value} value={p.value} disabled={disabled}>
                  {p?.label_mm ? (
                    <>{language === "en" ? p?.label : p?.label_mm}</>
                  ) : (
                    <>{p?.label}</>
                  )}
                </Option>
              );
            })}
          </Select>
          {onClick && (
            <Button
              className={classNames("text-bold mt-1")}
              icon={<PlusOutlined />}
              onClick={onClick}
              disabled={disabled}
            />
          )}
        </Input.Group>
      </Form.Item>
    </>
  );
};

const SelectField = (props) => {
  const {
    name,
    label,
    isRequired,
    id,
    disabled,
    placeholder,
    mode,
    options,
    allowClear,
    onSelect,
    onSearch,
    tooltip,
    loading,
    defaultValue,
    style,
    labelSrOnly,
    onClear,
    onClick,
  } = props;

  const [search, setSearch] = useState();
  return (
    <FormikField
      search={search}
      setSearch={setSearch}
      name={name}
      id={id}
      label={label}
      component={renderField}
      disabled={disabled}
      tooltip={tooltip}
      mode={mode}
      placeholder={placeholder}
      options={options}
      allowClear={allowClear}
      onSelect={onSelect}
      onSearch={onSearch}
      isRequired={isRequired}
      loading={loading}
      defaultValue={defaultValue}
      style={style}
      labelSrOnly={labelSrOnly}
      onClear={onClear}
      onClick={onClick}
    />
  );
};

export default SelectField;
