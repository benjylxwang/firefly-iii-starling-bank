const starling = require("./starling");

// API ENDPOINTS
const getAvailablePeriods = (token, id) => starling(token).get(`/accounts/${id}/statement/available-periods`);

const getStatement = (token, id, yearMonth) =>
  starling(token).get(`/accounts/${id}/statement/download`, { params: { yearMonth } });

const getStatementForRange = (token, id, start, end = "") =>
  starling(token).get(`/accounts/${id}/statement/downloadForDateRange`, { params: { start, end } });

const getBalance = (token, id) => starling(token).get(`/accounts/${id}/balance`);

const getIdentifiers = (token, id) => starling(token).get(`/accounts/${id}/identifiers`);

const getAccounts = (token) => starling(token).get(`/accounts`);

const confirmFunds = (token, id, targetAmountInMinorUnits) =>
  starling(token).get(`/accounts/${id}/confirmation-of-funds`, { params: { targetAmountInMinorUnits } });

// Recurring card payments
const getRecurringPayments = (token, accountUid) =>
  starling(token).get(`/accounts/${accountUid}/recurring-payment`);

const accounts = {
  getAvailablePeriods,
  getStatement,
  getStatementForRange,
  getBalance,
  getIdentifiers,
  getAccounts,
  confirmFunds,
  getRecurringPayments
};

module.exports = accounts;