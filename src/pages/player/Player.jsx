import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPlayer } from "../../services/playerSlice";
import PlayerList from "./component/PlayerList";

const Player = () => {
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(10);
  useEffect(() => {
    dispatch(getPlayer({ page: 0, size: limit }));
  }, [dispatch, limit]);
  console.log("player");
  return (
    <>
      <PlayerList limit={limit} setLimit={setLimit} />
    </>
  );
};

export default Player;
