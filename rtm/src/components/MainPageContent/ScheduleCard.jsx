import React from "react";
import { Card } from "reactstrap";
import AssignTask from "./AssignTaskCard";
const ScheduleCard = props => {
  return (
    <Card
      style={{
        height: "36rem",
        width: "35.5rem",
        borderRadius: "10px",
        marginLeft: "9px",
        marginRight: "1rem",
        fontFamily: "Muli",
        paddingBottom: "20px"
      }}
    >
      <div
        style={{
          marginTop: "1rem",
          marginLeft: "1rem",
          fontSize: "16px",
          fontWeight: "600"
        }}
      >
        Task Distribution
      </div>
      <hr />
      <div
        className="text-center"
        style={{ fontSize: "20px", marginTop: "-10px" }}
      >
        Assign Tasks
      </div>
      <div style={{ overflow: "auto" }}>
        {props.data.client.map((c, index) => (
          <React.Fragment key={index}>
            <AssignTask data={c} />
          </React.Fragment>
        ))}

        <div className="text-center" style={{ fontSize: "15px" }}>
          <span>Items per page: {props.data.client.length}</span>
          <span style={{ marginLeft: "40px" }} className="text-center">
            {props.skip + 1} - {props.skip + props.data.client.length} of{" "}
            {props.data.ClientsCount}
          </span>
          <i
            className="fas fa-angle-left align-middle"
            style={{
              fontSize: "20px",
              marginLeft: "10px",
              color: props.skip !== 0 ? "#000" : "#c7c7c7"
            }}
            onClick={props.skipBackward}
          />
          <i
            className="fas fa-angle-right  align-middle"
            style={{
              fontSize: "22px",
              marginLeft: "10px",
              color:
                props.skip + props.data.client.length < props.data.ClientsCount
                  ? "#000"
                  : "#c7c7c7"
            }}
            onClick={props.skipForward}
          />
        </div>
      </div>
    </Card>
  );
};

export default ScheduleCard;
