const starling = require("./starling");

// API ENDPOINTS
const getByCounterParty = (token, { id, year, month }) =>
  starling(token).get(`/accounts/${id}/spending-insights/counter-party`, { params: { year, month } });

const getByCountry = (token, { id, year, month }) =>
  starling(token).get(`/accounts/${id}/spending-insights/country`, { params: { year, month } });

const getBySpendingCategory = (token, { id, year, month }) =>
  starling(token).get(`/accounts/${id}/spending-insights/spending-category`, { params: { year, month } });

const insights = {
  getByCounterParty,
  getByCountry,
  getBySpendingCategory,
};

module.exports = insights;
