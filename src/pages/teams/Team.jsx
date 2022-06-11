import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTeam } from "../../services/teamSlice";
import TeamList from "./component/TeamList";

const Team = () => {
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(10);
  useEffect(() => {
    dispatch(getTeam({ page: 0, size: limit }));
  }, [dispatch, limit]);

  return (
    <>
      <TeamList limit={limit} setLimit={setLimit} />
    </>
  );
};

export default Team;
