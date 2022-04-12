const starling = require("./starling");

// API ENDPOINTS
const getAddresses = (token) => starling(token).get(`/addresses`);
const updateCurrentAddress = (token, address) => starling(token).post(`/addresses`, address);

const addresses = {
  getAddresses,
  updateCurrentAddress,
};

module.exports = addresses;