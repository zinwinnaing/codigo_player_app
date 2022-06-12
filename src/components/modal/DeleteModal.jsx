import React from "react";
import { Modal } from "antd";

const DeleteModal = ({ visible, onOk, onCancel }) => {
  return (
    <Modal
      title="Delete Modal"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <p>Are you sure to delete ?</p>
    </Modal>
  );
};

export default DeleteModal;
