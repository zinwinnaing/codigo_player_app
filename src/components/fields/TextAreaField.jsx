/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Field as FormikField } from 'formik';
import { Input, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import Label from '../label/Label';

const { TextArea } = Input;

const renderField = ({
  name,
  id,
  label,
  placeholder,
  rows,
  field,
  isRequired,
  className,
  form: { touched, errors },
  extra,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Form.Item
        validateStatus={touched[field.name] && errors[field.name] && 'error'}
        help={touched[field.name] && errors[field.name]}
        className={className}
        extra={extra}
      >
        <div className="mb-1">
          <Label htmlFor={id} label={t(label)} isRequired={isRequired} />
        </div>
        <TextArea
          {...field}
          rows={rows}
          name={name}
          id={id}
          placeholder={t(placeholder)}
        />
      </Form.Item>
    </>
  );
};

const TextAreaField = (props) => {
  const {
    name,
    label,
    placeholder,
    rows,
    isRequired,
    id,
    disabled,
    tooltip,
    className,
    extra,
  } = props;

  return (
    <FormikField
      name={name}
      id={id}
      label={label}
      placeholder={placeholder}
      component={renderField}
      disabled={disabled}
      rows={rows}
      tooltip={tooltip}
      isRequired={isRequired}
      className={className}
      extra={extra}
    />
  );
};

export default TextAreaField;
