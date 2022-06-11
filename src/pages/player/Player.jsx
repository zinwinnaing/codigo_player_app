import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPlayer } from "../../services/playerSlice";
import PlayerList from "./component/PlayerList";

const Player = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayer());
  }, [dispatch]);

  return (
    <>
      <PlayerList />
    </>
  );
};

export default Player;
