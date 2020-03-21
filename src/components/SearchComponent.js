import React, { useState } from "react";

function SearchComponent(props) {
  const [patientID, setPatientID] = useState(0);

  function handleChange(event) {
    setPatientID(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(patientID);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Patient ID
        <input type="text" name="patient-id" onChange={handleChange} />
      </label>
      <input type="submit" value="Get Patient Data" />
    </form>
  );
}

export default SearchComponent;
