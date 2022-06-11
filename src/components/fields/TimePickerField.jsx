import React from 'react';
import { Field as FormikField } from 'formik';
import { TimePicker, Form } from 'antd';
import Label from '../label/Label';

const renderField = ({
  name,
  id,
  label,
  placeholder,
  field,
  disabled,
  form: { setFieldValue, touched, errors },
  isRequired,
}) => {
  return (
    <>
      <Form.Item
        validateStatus={touched[field.name] && errors[field.name] && 'error'}
        help={touched[field.name] && errors[field.name]}
      >
        <Label htmlFor={id} label={label} isRequired={isRequired} />
        <TimePicker
          {...field}
          name={name}
          id={id}
          format="h:mm a"
          placeholder={placeholder}
          disabled={disabled}
          // defaultValue={field.value}
          onChange={(time) => {
            setFieldValue(field.name, time);
          }}
          style={{ width: '100%' }}
          allowClear={false}
        />
      </Form.Item>
    </>
  );
};

const TimePickerField = (props) => {
  const { name, id, label, placeholder, isRequired, disabled } = props;

  return (
    <FormikField
      name={name}
      id={id}
      label={label}
      placeholder={placeholder}
      component={renderField}
      disabled={disabled}
      isRequired={isRequired}
    />
  );
};

export default TimePickerField;
