import React, { Component } from "react";
import NameComponent from "./NameComponent";

const _ = require("lodash");

class NameContainer extends Component {
  state = {
    patientName: "",
    patientDOB: "",
    patientGender: ""
  };

  componentDidMount() {
    const { patientID } = this.props;
    // Quick check to see if patientID is default
    if (patientID !== 0) {
      this.fetchPatientDemographics();
    }
  }
  // If user submits new patient ID, update the demographics data
  componentDidUpdate(prevProps) {
    const { patientID } = this.props;
    if (!_.isEqual(prevProps.patientID, patientID)) {
      this.fetchPatientDemographics();
    }
  }

  fetchPatientDemographics() {
    const { patientID } = this.props;

    fetch(
      `https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/${patientID}`,
      { headers: { Accept: "application/json+fhir" } }
    )
      .then(res => res.json())
      .then(result => {
        const patientName = result.name[0].text;
        const patientDOB = result.birthDate;
        const patientGender = result.gender;
        this.setState({ patientName, patientDOB, patientGender });
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      });
  }

  render() {
    const { patientName, patientGender, patientDOB } = this.state;
    return (
      <NameComponent
        patientName={patientName}
        patientGender={patientGender}
        patientDOB={patientDOB}
      />
    );
  }
}

export default NameContainer;
