import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppLayout from "../../components/layout/Layout";
import Loading from "../../components/loading/Loading";
import { playerSelector } from "../../services/playerSlice";
import { PlAYER_LABEL } from "../../variables/constants";
import PlayerList from "./component/PlayerList";

const Player = () => {
  const { data, isPending } = useSelector(playerSelector);
  useEffect(() => {
    if (isPending === false) {
      localStorage.setItem(PlAYER_LABEL, JSON.stringify(data?.data));
    }
  }, [data, isPending]);
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
