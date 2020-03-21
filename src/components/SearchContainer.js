import React, { Component } from "react";
import SearchComponent from "./SearchComponent";
import "../styling/Search.css";
const { fetchData } = require("../utils");
const { conditionResource } = require("../constants");

const _ = require("lodash");

class SearchContainer extends Component {
  state = {
    patientID: 0,
    patientData: []
  };

  // Checking to see if patientData has changed. If so, notify the parent container in order to update Table with new data
  componentDidUpdate(_prevProps, prevState) {
    const { patientData, patientID } = this.state;
    const { sendData, sendID } = this.props;
    // Lodash makes it easy to loop through objects and compare values
    if (!_.isEqual(prevState.patientData, patientData)) {
      sendData(patientData);
    }

    if (!_.isEqual(prevState.patientID, patientID)) {
      sendID(patientID);
    }
  }

  // Updating parent container's fetch status so TableContainer loads data loading msg
  onPatientIDSubmit(patientID) {
    const { checkFetchStatus } = this.props;
    this.setState({ patientID }, () => {
      checkFetchStatus(true);
      this.fetchPatientData();
    });
  }

  async fetchPatientData() {
    const { checkFetchStatus } = this.props;
    const { patientID } = this.state;

    await fetchData(conditionResource, patientID).then(result => {
      this.setState({ patientData: result.entry }, () => {
        checkFetchStatus(false);
      });
    });
  }

  render() {
    return (
      <div className="search">
        <SearchComponent onSubmit={this.onPatientIDSubmit.bind(this)} />
      </div>
    );
  }
}

export default SearchContainer;
