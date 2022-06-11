import { Card, Row, Col, Button } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import Loading from "../../../components/loading/Loading";
import { teamSelector } from "../../../services/teamSlice";

const TeamList = ({ limit, setLimit }) => {
  const { data, isPending } = useSelector(teamSelector);
  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(data?.data));
  }, [data]);

  const PlayerCard = ({ data }) => {
    return (
      <Card>
        <div>
          <span>Team Name : </span> {data?.full_name}({data?.abbreviation})
          <br></br>
          Conference : {data?.conference}
          <br></br>
          City : {data?.city}
          <br></br>
          Division : {data?.division}
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
          <div className="text-right pr-2 pb-2">
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

export default TeamList;
