const starling = require("./starling");

// API ENDPOINTS
const getProfile = (token) => starling(token).get(`/settle-up/profile`);

const settleUp = { getProfile };

module.exports = settleUp;
