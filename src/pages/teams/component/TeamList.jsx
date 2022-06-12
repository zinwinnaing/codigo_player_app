import { Card, Row, Col, Button } from "antd";
import React, { useState } from "react";
import _ from "lodash";
import { TEAM_LABEL } from "../../../variables/constants";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import DeleteModal from "../../../components/modal/DeleteModal";
import TeamEditModal from "./TeamEditModal";

const TeamList = () => {
  const teamData = JSON.parse(localStorage.getItem(TEAM_LABEL));
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState(false);

  const TeamCard = ({ data }) => {
    return (
      <Card className="p-2 ">
        <div>
          Name : {data?.name}
          <br />
          <span>Player Count : </span> {data?.player_count}
          <br></br>
          Region : {data?.region}
          <br></br>
          Country : {data?.country}
        </div>

        <div className="text-right">
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => {
              setIsOpenDelete(true);
              setSelectedData(data);
            }}
            className="mr-2"
          />
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => {
              setIsOpenEditModal(true);
              setSelectedData(data);
            }}
          />
        </div>
      </Card>
    );
  };

  return (
    <>
      <Row className="p-2">
        {_.map(teamData, (d) => {
          return (
            <Col span={8} className="p-2" key={d?.id}>
              <TeamCard data={d} />
            </Col>
          );
        })}
      </Row>

      <DeleteModal
        visible={isOpenDelete}
        onOk={() => {
          const teamData = JSON.parse(localStorage.getItem(TEAM_LABEL));
          const removeData = _.reject(teamData, { name: selectedData?.name });
          localStorage.setItem(TEAM_LABEL, JSON.stringify(removeData));
          setIsOpenDelete(false);
        }}
        onCancel={() => setIsOpenDelete(false)}
      />
      <TeamEditModal
        title="Team Edit Modal"
        isOpen={isOpenEditModal}
        onClose={() => setIsOpenEditModal(false)}
        initialValues={selectedData}
      />
    </>
  );
};

export default TeamList;
