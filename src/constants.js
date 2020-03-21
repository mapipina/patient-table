const tableColumns = [
  {
    headerName: "Condition",
    field: "condition",
    sortable: true,
    cellStyle: { "text-align": "left" }
  },
  {
    headerName: "Date Recorded",
    field: "date",
    cellStyle: { "text-align": "left" }
  },
  {
    headerName: "PubMed Link",
    field: "url",
    resizable: true,
    flex: 1,
    minWidth: 150,
    cellRenderer: params => {
      return `<a href=${params.value} target="_blank" rel="noopener">${params.value}</a>`;
    },
    cellStyle: { "text-align": "left" }
  }
];

const conditionResource = "Condition";
const patientResource = "Patient";
const medURL = "https://www.ncbi.nlm.nih.gov/pubmed/?term=";

module.exports = {
  tableColumns,
  conditionResource,
  patientResource,
  medURL
};
