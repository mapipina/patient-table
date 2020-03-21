import React, { Component } from "react";
import SearchComponent from "./SearchComponent";

const _ = require("lodash");

// eslint-disable-next-line no-unused-expressions
("use strict");

class SearchContainer extends Component {
  state = {
    patientID: 0,
    patientData: {}
  };

  componentDidMount() {
    // console.log(this.props.sendData);
  }

  // Checking to see if patientData has changed. If so, notify the parent container in order to update Table with new data
  componentDidUpdate(_prevProps, prevState) {
    const { patientData } = this.state;
    const { sendData } = this.props;
    // Lodash makes it easy to loop through objects and compare values
    if (!_.isEqual(prevState.patientData, patientData)) {
      sendData(patientData);
    }
  }

  onPatientIDSubmit(patientID) {
    this.setState({ patientID }, () => this.fetchPatientData());
  }

  fetchPatientData() {
    fetch(
      `https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition?patient=${this.state.patientID}`,
      { headers: { Accept: "application/json+fhir" } }
    )
      .then(res => res.json())
      .then(result => {
        this.setState({ patientData: result.entry });
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      });
  }

  render() {
    return <SearchComponent onSubmit={this.onPatientIDSubmit.bind(this)} />;
  }
}

export default SearchContainer;
