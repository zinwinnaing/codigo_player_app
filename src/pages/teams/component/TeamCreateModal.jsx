import { Modal, message } from "antd";
import { Formik } from "formik";
import React from "react";
import _ from "lodash";
import { teamSchema } from "../../../components/fields/ValidationSchema";
import TeamForm from "./TeamForm";
import { PlAYER_LABEL, TEAM_LABEL } from "../../../variables/constants";

const TeamCreateModal = ({ title, isOpen, onClose }) => {
  const initialValues = {
    name: "",
    player_count: "",
    region: "",
    country: "",
  };

  const onFormSubmit = (data, { resetForm, setSubmitting }) => {
    const teamData = JSON.parse(localStorage.getItem(TEAM_LABEL)) || [];

    let parseData;

    const compare = _.find(teamData, ["name", data?.name]);
    if (compare) {
      return message.error("Name is already exit .");
    } else {
      if (!_.isEmpty(teamData)) {
        parseData = [...teamData, data];
      } else {
        parseData = [data];
      }
      const playerList = JSON.parse(localStorage.getItem(PlAYER_LABEL));

      const newPlayerList = _.map(playerList, (no) => {
        let updatePlayer = _.map(data?.player, (p) => {
          if (no?.id === p) {
            return { ...no, team: "new player" };
          }
        });
        return updatePlayer;
      });

      console.log("newPlayerList", newPlayerList);

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
            name="teamCreateForm"
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

export default TeamCreateModal;
