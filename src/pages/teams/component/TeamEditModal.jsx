import { Modal, message } from "antd";
import { Formik } from "formik";
import React from "react";
import _ from "lodash";
import { teamSchema } from "../../../components/fields/ValidationSchema";
import TeamForm from "./TeamForm";
import { TEAM_LABEL } from "../../../variables/constants";

const TeamEditModal = ({ title, isOpen, onClose, initialValues }) => {
  const onFormSubmit = (data, { resetForm, setSubmitting }) => {
    const teamData = JSON.parse(localStorage.getItem(TEAM_LABEL)) || [];

    const removeData = _.reject(teamData, { name: initialValues?.name });

    let parseData;

    const compare = _.find(removeData, ["name", data?.name]);
    if (compare) {
      return message.error("Name is already exit.");
    } else {
      if (!_.isEmpty(removeData)) {
        parseData = [...removeData, data];
      } else {
        parseData = [data];
      }
      localStorage.setItem(TEAM_LABEL, JSON.stringify(parseData));
      resetForm();
      onClose();
    }
  };

  return (
    <Modal title={title} visible={isOpen} onCancel={onClose} footer={null}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onFormSubmit}
        validationSchema={teamSchema}
        validateOnMount
      >
        {({ handleSubmit, resetForm, isValid, isSubmitting }) => (
          <TeamForm
            name="teamEditForm"
            handleSubmit={handleSubmit}
            resetForm={() => resetForm(initialValues)}
            onClose={onClose}
            isReady={!isSubmitting && isValid}
          />
        )}
      </Formik>
    </Modal>
  );
};

export default TeamEditModal;
