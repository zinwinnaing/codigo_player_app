import { Avatar, Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { playerSelector } from "../../../services/playerSlice";

const { Meta } = Card;

const PlayerList = () => {
  const { data, isPending } = useSelector(playerSelector);

  return (
    <>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </>
  );
};

export default PlayerList;
