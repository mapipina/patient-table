import React from "react";
import "../styling/Name.css";

function NameComponent(props) {
  return (
    <div className="name__text">
      <div>
        <span className="name__header">Name: </span>
        {props.patientName}
      </div>
      <div>
        <span className="name__header">Gender: </span>
        {props.patientGender}
      </div>
      <div>
        <span className="name__header">DOB: </span>
        {props.patientDOB}
      </div>
    </div>
  );
}

export default NameComponent;
