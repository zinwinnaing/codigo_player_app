/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Field as FormikField } from 'formik';
import { Radio, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { flatten } from '../../utils/Utils';
import Label from '../label/Label';

const renderField = ({
  id,
  label,
  field,
  form: { setFieldValue, ...form },
  options,
  disabled,
  defaultValue,
  tooltip,
  isRequired,
}) => {
  const touched = flatten(form.touched);
  const errors = flatten(form.errors);
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <>
      <Form.Item
        validateStatus={touched[field.name] && errors[field.name] && 'error'}
        help={touched[field.name] && errors[field.name]}
      >
        <div>
          {label && (
            <Label
              tooltip={tooltip}
              htmlFor={id}
              label={t(label)}
              isRequired={isRequired}
            />
          )}
        </div>

        <Radio.Group
          {...field}
          id={id}
          defaultValue={defaultValue}
          className="my-2"
          onChange={(event) => {
            setFieldValue(field.name, event.target.value);
          }}
        >
          {options.map((option) => {
            return (
              <Radio
                name={field.name}
                key={option.value}
                value={option.value}
                disabled={disabled}
                defaultChecked
              >
                {language === 'en' ? option.label : option.label_mm}
              </Radio>
            );
          })}
        </Radio.Group>
      </Form.Item>
    </>
  );
};

const RadioField = (props) => {
  const { name, label, message, id, disabled, options, isRequired } = props;
  // const { t } = useTranslation();

  return (
    <FormikField
      name={name}
      id={id}
      message={message}
      label={label}
      component={renderField}
      disabled={disabled}
      options={options}
      isRequired={isRequired}
      // t={t}
    />
  );
};

export default RadioField;
