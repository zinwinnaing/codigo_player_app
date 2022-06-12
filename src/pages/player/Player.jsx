import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../../components/layout/Layout";
import Loading from "../../components/loading/Loading";
import { playerSelector } from "../../services/playerSlice";
import PlayerList from "./component/PlayerList";

const Player = () => {
  const { isPending } = useSelector(playerSelector);

  return (
    <>
      <AppLayout title="Player List">
        <div className="d-flex px-4 pt-4">
          <h1>Player List</h1>
        </div>
        {isPending === false ? <PlayerList /> : <Loading></Loading>}
      </AppLayout>
    </>
  );
};

export default Player;
