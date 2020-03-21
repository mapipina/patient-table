import React, { Component } from "react";
import TableComponent from "./TableComponent";
import "../styling/Table.css";

const { conditionResource, medURL, tableColumns } = require("../constants");
const _ = require("lodash");

const LOADING_MSG = "Loading table data...";

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
      if (conditionObj.resourceType === conditionResource) {
        const date = conditionObj.dateRecorded;
        const condition = conditionObj.code.text;
        const url = `${medURL}${condition.split(" ").join("+")}`;
        rowData.push({ condition, date, url });
      }
    });

    this.setState({ columnDefs: tableColumns, rowData });
  }

  render() {
    const { columnDefs, rowData } = this.state;
    const { isFetching } = this.props;
    return (
      <div className="table">
        {!isFetching && _.isEmpty(rowData) ? (
          ""
        ) : isFetching ? (
          <div>{LOADING_MSG}</div>
        ) : (
          <TableComponent columnDefs={columnDefs} rowData={rowData} />
        )}
      </div>
    );
  }
}

export default TableContainer;
