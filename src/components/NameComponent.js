import React from "react";

function NameComponent(props) {
  return (
    <div>
      <p>Name: {props.patientName}</p>
      <p>Gender: {props.patientGender}</p>
      <p>DOB {props.patientDOB}</p>
    </div>
  );
}

export default NameComponent;
