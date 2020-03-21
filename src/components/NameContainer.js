import React, { Component } from "react";
import NameComponent from "./NameComponent";
import "../styling/Name.css";
const { fetchData } = require("../utils");
const { patientResource } = require("../constants");

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

  async fetchPatientDemographics() {
    const { patientID } = this.props;

    await fetchData(patientResource, patientID).then(result => {
      const patientName = result.name[0].text;
      const patientDOB = result.birthDate;
      const patientGender = result.gender;
      this.setState({ patientName, patientDOB, patientGender });
    });
  }

  render() {
    const { patientName, patientGender, patientDOB } = this.state;
    return (
      <div className="name">
        <NameComponent
          patientName={patientName}
          patientGender={patientGender}
          patientDOB={patientDOB}
        />
      </div>
    );
  }
}

export default NameContainer;
