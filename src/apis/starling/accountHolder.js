const starling = require("./starling");

// API ENDPOINTS
const getAccountHolder = (token) => starling(token).get(`/account-holder`);
const getName = (token) => starling(token).get(`/account-holder/name`);

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

module.exports = {
  getAccountHolder,
  getName,
  getIndividual,
  getEmail,
  getJoint,
  getSoleTrader,
  getBusiness,
  getBusinessCorrespondenceAddress,
  getBusinessRegisteredAddress,
};
