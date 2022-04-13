const axios = require("axios");
// Default content type is json
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const starling = (token) =>
  axios.create({
    baseURL: process.env.STARLING_API_URL,
    headers: { Authorization: `Bearer ${token}` },
  });

module.exports = starling;
