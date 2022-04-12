const starling = require("./starling");

// API ENDPOINTS
const getStatus = (token) => starling(token).get(`/onboarding`);
const onboardAccount = (token, request) => starling(token).put(`/onboarding`, request);

const onboarding = {
  getStatus,
  onboardAccount,
};

module.exports = onboarding;
