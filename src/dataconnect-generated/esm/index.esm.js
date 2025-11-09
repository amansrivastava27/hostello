import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'hostello',
  location: 'us-east4'
};

export const addNewReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewReview', inputVars);
}
addNewReviewRef.operationName = 'AddNewReview';

export function addNewReview(dcOrVars, vars) {
  return executeMutation(addNewReviewRef(dcOrVars, vars));
}

export const getHostelDetailsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetHostelDetails', inputVars);
}
getHostelDetailsRef.operationName = 'GetHostelDetails';

export function getHostelDetails(dcOrVars, vars) {
  return executeQuery(getHostelDetailsRef(dcOrVars, vars));
}

export const createNewBookingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewBooking', inputVars);
}
createNewBookingRef.operationName = 'CreateNewBooking';

export function createNewBooking(dcOrVars, vars) {
  return executeMutation(createNewBookingRef(dcOrVars, vars));
}

export const getAvailableRoomTypesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAvailableRoomTypes', inputVars);
}
getAvailableRoomTypesRef.operationName = 'GetAvailableRoomTypes';

export function getAvailableRoomTypes(dcOrVars, vars) {
  return executeQuery(getAvailableRoomTypesRef(dcOrVars, vars));
}

