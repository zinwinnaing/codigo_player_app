import { Card, Row, Col, Button } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { playerSelector } from "../../../services/playerSlice";
import _ from "lodash";
import Loading from "../../../components/loading/Loading";

const PlayerList = ({ limit, setLimit }) => {
  const { data, isPending } = useSelector(playerSelector);
  useEffect(() => {
    localStorage.setItem("player", JSON.stringify(data?.data));
  }, [data]);

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
      <Row className="p-2">
        {_.map(data?.data, (d) => {
          return (
            <Col span={8} className="p-2" key={d?.id}>
              <PlayerCard data={d} />
            </Col>
          );
        })}
      </Row>
      {isPending === true ? (
        <Loading />
      ) : (
        limit < data?.meta?.total_count && (
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
        )
      )}
    </>
  );
};

export default PlayerList;
