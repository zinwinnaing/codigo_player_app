import React from "react";
import { Form } from "antd";
import Field from "../../../components/fields/Field";
import OptionButton from "../../../components/buttons/OptionButton";
import SelectField from "../../../components/fields/SelectField";
import { PlAYER_LABEL } from "../../../variables/constants";
import _ from "lodash";
const TeamForm = ({ name, handleSubmit, onClose, resetForm, isReady }) => {
  const data = JSON.parse(localStorage.getItem(PlAYER_LABEL));

  const playerOptions = _.map(data, (d) => {
    return {
      key: d?.id,
      label: d?.first_name,
      value: d?.id,
    };
  });

  return (
    <Form name={name} onFinish={handleSubmit}>
      <Field
        name="name"
        id="name"
        label="Name"
        placeholder="enter"
        type="text"
        isRequired
      />
      <Field
        name="player_count"
        id="player_count"
        label="Player Count"
        placeholder="enter"
        type="text"
        isRequired
      />
      <Field
        name="region"
        id="region"
        label="Region"
        placeholder="enter"
        type="text"
        isRequired
      />

      <Field
        name="country"
        id="country"
        label="Country"
        placeholder="enter"
        type="text"
        isRequired
      />
      <SelectField
        name="player"
        id="player"
        options={playerOptions}
        label="Player"
        placeholder="Select Player"
        mode="multiple"
      />
      <div className="d-flex justify-content-end mt-2">
        <OptionButton
          onClick={() => {
            resetForm();
            onClose();
          }}
          className="mr-2"
          label="Cancel"
        ></OptionButton>
        <OptionButton
          htmlType="submit"
          disabled={!isReady}
          label="Submit"
        ></OptionButton>
      </div>
    </Form>
  );
};

export default TeamForm;
