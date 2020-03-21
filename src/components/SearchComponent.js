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
      <label className="search__label">
        Patient ID
        <input type="text" name="patient-id" onChange={handleChange} />
      </label>
      <button className="search__label" type="submit">
        Get Patient Data
      </button>
    </form>
  );
}

export default SearchComponent;
