const starling = require("./starling");

// API ENDPOINTS
const getAccountHolder = (token) => starling(token).get(`/account-holder`);
const getName = (token) => starling(token).get(`/account-holder/name`);
const getProfilePicture = (token, accountHolderUid) =>
  starling(token).get(`/account-holder/${accountHolderUid}/profile-image`);
const updateProfilePicture = (token, accountHolderUid, type, image) =>
  starling(token).put(`/account-holder/${accountHolderUid}/profile-image`, image, { "Content-Type": type });
const deleteProfilePicture = (token, accountHolderUid) =>
  starling(token).delete(`/account-holder/${accountHolderUid}/profile-image`);

// Individual
const getIndividual = (token) => starling(token).get(`/account-holder/individual`);
const getEmail = (token) => starling(token).get(`account-holder/individual/email`);

// Joint
const getJoint = (token) => starling(token).get(`/account-holder/joint`);

// Sole Trader
const getSoleTrader = (token) => starling(token).get(`/account-holder/sole-trader`);

// Business
const getBusiness = (token) => starling(token).get(`/account-holder/business`);
const getBusinessCorrespondenceAddress = (token) =>
  starling(token).get(`/account-holder/business/correspondence-address`);
const getBusinessRegisteredAddress = (token) => starling(token).get(`/account-holder/business/registered-address`);

const accountHolder = {
  getAccountHolder,
  getName,
  getProfilePicture,
  updateProfilePicture,
  deleteProfilePicture,
  getIndividual,
  getEmail,
  getJoint,
  getSoleTrader,
  getBusiness,
  getBusinessCorrespondenceAddress,
  getBusinessRegisteredAddress,
};

module.exports = accountHolder;
