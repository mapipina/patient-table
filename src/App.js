import React, { useState } from "react";
import "./App.css";
import SearchContainer from "./components/SearchContainer";
import NameContainer from "./components/NameContainer";
import TableContainer from "./components/TableContainer";

// Do not need lifecycle methods so using simple functional component
function App() {
  const [patientData, setPatientData] = useState([]);
  const [patientID, setPatientID] = useState(0);

  function getPatientData(patientData) {
    setPatientData(patientData);
  }

  function sendID(patientID) {
    setPatientID(patientID);
  }

  return (
    <div className="App">
      <header className="App-header">Patient Table</header>
      <SearchContainer sendData={getPatientData} sendID={sendID} />
      <NameContainer patientID={patientID} />
      <TableContainer patientData={patientData} />
    </div>
  );
}

export default App;
