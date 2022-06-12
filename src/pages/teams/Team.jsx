import { Button } from "antd";
import React, { useState } from "react";
import AppLayout from "../../components/layout/Layout";
import TeamCreateModal from "./component/TeamCreateModal";
import TeamList from "./component/TeamList";

const Team = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  return (
    <>
      <AppLayout>
        <div className="d-flex justify-content-between px-4 pt-4">
          <h1>Team List</h1>
          <div>
            <Button
              type="primary"
              onClick={() => {
                setIsOpenCreateModal(true);
              }}
            >
              Create
            </Button>
          </div>
        </div>
        <div>
          <TeamList />
        </div>
      </AppLayout>
      <TeamCreateModal
        title="Team Create Modal"
        isOpen={isOpenCreateModal}
        onClose={() => setIsOpenCreateModal(false)}
      />
    </>
  );
};

export default Team;
