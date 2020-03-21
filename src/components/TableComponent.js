import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

function TableComponent(props) {
  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "500px",
        width: "600px"
      }}
    >
      <AgGridReact
        columnDefs={props.columnDefs}
        rowData={props.rowData}
      ></AgGridReact>
    </div>
  );
}

export default TableComponent;
