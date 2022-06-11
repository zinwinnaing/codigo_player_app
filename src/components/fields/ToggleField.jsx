/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Field as FormikField } from 'formik';
import { Switch, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import Label from '../label/Label';

const renderField = ({
  name,
  id,
  label,
  field,
  form: { setFieldValue, touched, errors },
  disabled,
  isRequired,
  extra,
  className,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Form.Item
        validateStatus={touched[field.name] && errors[field.name] && 'error'}
        help={touched[field.name] && errors[field.name]}
        extra={extra}
        className={className}
      >
        <Label htmlFor={id} label={t(label)} isRequired={isRequired} />
        <div>
          <Switch
            className="my-1"
            name={name}
            id={id}
            checked={field.value}
            onChange={(value) => {
              setFieldValue(field.name, value);
            }}
            disabled={disabled}
          />
        </div>
      </Form.Item>
    </>
  );
};

const ToggleField = (props) => {
  const { name, label, isRequired, id, disabled, extra, className } = props;

  return (
    <FormikField
      name={name}
      id={id}
      label={label}
      component={renderField}
      disabled={disabled}
      isRequired={isRequired}
      extra={extra}
      className={className}
    />
  );
};

export default ToggleField;
