import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AppLayout from "../../components/layout/Layout";
import { getPlayer } from "../../services/playerSlice";
import PlayerList from "./component/PlayerList";

const Player = () => {
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(10);
  useEffect(() => {
    dispatch(getPlayer({ page: 0, size: limit }));
  }, [dispatch, limit]);

  return (
    <>
      <AppLayout>
        <PlayerList limit={limit} setLimit={setLimit} />
      </AppLayout>
    </>
  );
};

export default Player;
