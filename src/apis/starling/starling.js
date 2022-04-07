const axios = require("axios");
// Default content type is json
axios.defaults.headers.post['Content-Type'] = 'application/json';

const starling = (token) =>
  axios.create({
    baseUrl: process.env.STARLING_API_URL,
    headers: { Authorization: `Bearer ${token}` },
  });

module.exports = starling;