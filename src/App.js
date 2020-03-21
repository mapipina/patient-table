import React, { useState } from "react";
import "./App.css";
import SearchContainer from "./components/SearchContainer";
import NameContainer from "./components/NameContainer";
import TableContainer from "./components/TableContainer";

// Do not need lifecycle methods so using simple functional component
function App() {
  const [patientData, setPatientData] = useState([]);
  const [patientID, setPatientID] = useState(0);
  const [isFetching, setFetchingStatus] = useState(false);

  function getPatientData(patientData) {
    setPatientData(patientData);
  }

  function sendID(patientID) {
    setPatientID(patientID);
  }

  function checkFetchStatus(isFetching) {
    setFetchingStatus(isFetching);
  }

  return (
    <div className="App">
      <header className="App-header">Patient Table</header>
      <div className="App__childContainer">
        <SearchContainer
          sendData={getPatientData}
          sendID={sendID}
          checkFetchStatus={checkFetchStatus}
        />
        {patientID === 0 ? "" : <NameContainer patientID={patientID} />}
        <TableContainer isFetching={isFetching} patientData={patientData} />
      </div>
    </div>
  );
}

export default App;
