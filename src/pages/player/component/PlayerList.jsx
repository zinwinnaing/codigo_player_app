import { Card, Row, Col, Button } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { playerSelector } from "../../../services/playerSlice";
import _ from "lodash";
import { PlAYER_LABEL } from "../../../variables/constants";

const PlayerList = () => {
  const { isPending, data: meta } = useSelector(playerSelector);
  const [limit, setLimit] = useState(10);
  const [playerData, setPlayerData] = useState([]);

  console.log("playdata", playerData);

  const data = JSON.parse(localStorage.getItem(PlAYER_LABEL));

  const PlayerCard = ({ data }) => {
    return (
      <Card>
        <div>
          Player ID : {data?.id}
          <br />
          <span>Player Name : </span> {data?.first_name} {data?.last_name}
          <br></br>
          Team : {data?.team.full_name}
          <br></br>
          Position : {data?.position}
        </div>
      </Card>
    );
  };

  return (
    <>
      {data && (
        <>
          <Row className="p-2">
            {_.map(data.slice(0, limit), (d) => {
              return (
                <Col span={8} className="p-2" key={d?.id}>
                  <PlayerCard data={d} />
                </Col>
              );
            })}
          </Row>
          {limit < meta?.meta?.total_count && (
            <div className="text-center pr-2 mt-2 pb-2">
              <Button
                type="primary"
                onClick={() => {
                  setLimit(limit + 10);
                }}
                loading={isPending === true}
              >
                LoadMore
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PlayerList;
