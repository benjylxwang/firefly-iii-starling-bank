const starling = require("./starling");

// API ENDPOINTS
const getPhoto = (token, { accountUid, spaceUid }) =>
  starling(token).get(`/account/${accountUid}/spaces/${spaceUid}/photo`);
const getSpaces = (token, { accountUid }) => starling(token).get(`/account/${accountUid}/spaces`);
const getSpendingSpace = (token, { accountUid, spaceUid }) =>
  starling(token).get(`/account/${accountUid}/spaces/spending/${spaceUid}`);

const spaces = {
  getPhoto,
  getSpaces,
  getSpendingSpace,
};

module.exports = spaces;
