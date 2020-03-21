const { conditionResource } = require("./constants");

const headersObj = { headers: { Accept: "application/json+fhir" } };
const conditionAPI =
  "https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition?patient=";
const patientAPI =
  "https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/";

// Generalizing the API call because it is being shared with among two parent containers
export const fetchData = (type, patientID) => {
  return new Promise((resolve, reject) => {
    const apiURL = type === conditionResource ? conditionAPI : patientAPI;
    fetch(`${apiURL}${patientID}`, headersObj)
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
};
