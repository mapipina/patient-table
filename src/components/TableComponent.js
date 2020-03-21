import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

import "../styling/Table.css";

function TableComponent(props) {
  return (
    <div className="ag-theme-material table__component">
      <AgGridReact
        columnDefs={props.columnDefs}
        rowData={props.rowData}
      ></AgGridReact>
    </div>
  );
}

export default TableComponent;
