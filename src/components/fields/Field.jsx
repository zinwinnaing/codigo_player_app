import React from "react";
import { Field as FormikField } from "formik";
import { Input, Form } from "antd";
import Label from "../label/Label";

const renderField = ({
  id,
  label,
  placeholder,
  type,
  field,
  disabled,
  form: { setFieldValue, touched, errors, ...form },
  prefixIcon,
  extra,
  tooltip,
  isRequired,
  textAlign,
  className,
  bordered,
}) => {
  return (
    <Form.Item
      className={className}
      validateStatus={touched[field.name] && errors[field.name] && "error"}
      help={touched[field.name] && errors[field.name]}
      extra={extra}
    >
      {label && (
        <Label
          tooltip={tooltip}
          htmlFor={id}
          label={label}
          isRequired={isRequired}
        />
      )}

      <Input
        {...field}
        id={id}
        type={type}
        prefix={prefixIcon}
        placeholder={placeholder}
        value={field.value}
        disabled={disabled}
        bordered={bordered}
        style={{ textAlign }}
        className="mt-1"
        onChange={(event) => {
          setFieldValue(field.name, event.target.value);
        }}
      />
    </Form.Item>
  );
};

const Field = (props) => {
  const {
    name,
    label,
    placeholder,
    type,
    prefixIcon,
    isRequired,
    id,
    disabled,
    extra,
    tooltip,
    textAlign,
    style,
    bordered,
    className,
  } = props;

  return (
    <FormikField
      name={name}
      id={id}
      type={type}
      label={label}
      placeholder={placeholder}
      component={renderField}
      disabled={disabled}
      prefixIcon={prefixIcon}
      extra={extra}
      tooltip={tooltip}
      isRequired={isRequired}
      textAlign={textAlign}
      style={style}
      className={className}
      bordered={bordered}
    />
  );
};

export default Field;
