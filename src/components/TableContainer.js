import React, { Component } from "react";
import TableComponent from "./TableComponent";
const { tableColumns } = require("../constants");
const _ = require("lodash");

const CONDITION_RESOURCE = "Condition";
const MED_URL = "https://www.ncbi.nlm.nih.gov/pubmed/?term=";

class TableContainer extends Component {
  state = {
    columnDefs: [],
    rowData: []
  };

  componentDidMount() {
    this.setState({ columnDefs: tableColumns });
  }

  // Ensuring that table re-renders with latest patient data
  componentDidUpdate(prevProps) {
    const { patientData } = this.props;
    if (!_.isEqual(prevProps.patientData, patientData)) {
      this.parsePatientData();
    }
  }

  parsePatientData() {
    const { patientData } = this.props;
    const rowData = [];
    patientData.forEach(datum => {
      const conditionObj = datum.resource;
      if (conditionObj.resourceType === CONDITION_RESOURCE) {
        const date = conditionObj.dateRecorded;
        const condition = conditionObj.code.text;
        const url = `${MED_URL}${condition}`;
        rowData.push({ condition, date, url });
      }
    });

    this.setState({ rowData });
  }

  render() {
    const { columnDefs, rowData } = this.state;
    return <TableComponent columnDefs={columnDefs} rowData={rowData} />;
  }
}

export default TableContainer;
