const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'hostello',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const addNewReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewReview', inputVars);
}
addNewReviewRef.operationName = 'AddNewReview';
exports.addNewReviewRef = addNewReviewRef;

exports.addNewReview = function addNewReview(dcOrVars, vars) {
  return executeMutation(addNewReviewRef(dcOrVars, vars));
};

const getHostelDetailsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetHostelDetails', inputVars);
}
getHostelDetailsRef.operationName = 'GetHostelDetails';
exports.getHostelDetailsRef = getHostelDetailsRef;

exports.getHostelDetails = function getHostelDetails(dcOrVars, vars) {
  return executeQuery(getHostelDetailsRef(dcOrVars, vars));
};

const createNewBookingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewBooking', inputVars);
}
createNewBookingRef.operationName = 'CreateNewBooking';
exports.createNewBookingRef = createNewBookingRef;

exports.createNewBooking = function createNewBooking(dcOrVars, vars) {
  return executeMutation(createNewBookingRef(dcOrVars, vars));
};

const getAvailableRoomTypesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAvailableRoomTypes', inputVars);
}
getAvailableRoomTypesRef.operationName = 'GetAvailableRoomTypes';
exports.getAvailableRoomTypesRef = getAvailableRoomTypesRef;

exports.getAvailableRoomTypes = function getAvailableRoomTypes(dcOrVars, vars) {
  return executeQuery(getAvailableRoomTypesRef(dcOrVars, vars));
};
