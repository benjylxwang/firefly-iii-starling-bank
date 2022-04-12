const starling = require("./starling");

// API ENDPOINTS
const getIndividualIdentity = (token) => starling(token).get(`/identity/individual`);
const getIdentityToken = (token) => starling(token).get(`/identity/token`);
const logoutAllUserSessions = (token) => starling(token).put(`/identity/logout`);

const identity = {
  getIndividualIdentity,
  getIdentityToken,
  logoutAllUserSessions,
};

module.exports = identity;
