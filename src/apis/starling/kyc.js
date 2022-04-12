const starling = require("./starling");

// API ENDPOINTS
const getResult = (token) => starling(token).get(`/kyc/result`);

const kyc = {
  getResult,
};

module.exports = kyc;
