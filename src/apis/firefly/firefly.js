const axios = require("axios");
// Default content type is json
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

const firefly = axios.create({
  baseURL: process.env.FIREFLY_API_URL,
  headers: { Authorization: `Bearer ${global.secrets.FIREFLY_TOKEN}` },
});

module.exports = firefly;
