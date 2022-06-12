import React from "react";
import { Form } from "antd";
import Field from "../../../components/fields/Field";
import OptionButton from "../../../components/buttons/OptionButton";

const TeamForm = ({ name, handleSubmit, onClose, resetForm, isReady }) => {
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
