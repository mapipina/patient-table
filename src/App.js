import React, { useState } from "react";
import "./App.css";
import SearchContainer from "./components/SearchContainer";
import TableComponent from "./components/TableComponent";

function App() {
  const [patientData, setPatientData] = useState({});

  function getPatientData(patientData) {
    setPatientData(patientData);
  }

  return (
    <div className="App">
      <header className="App-header">Patient Table</header>

      <SearchContainer sendData={getPatientData} />
      <TableComponent patientData={patientData} />
    </div>
  );
}

export default App;
