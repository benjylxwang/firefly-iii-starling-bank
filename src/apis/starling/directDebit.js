const starling = require("./starling");

// API ENDPOINTS
const getAllDirectDebits = (token) => starling(token).get(`/direct-debit/mandates`);
const getDirectDebit = (token, { mandateUid }) => starling(token).get(`/direct-debit/mandates/${mandateUid}`);
const cancelDirectDebit = (token, { mandateUid }) => starling(token).delete(`/direct-debit/mandates/${mandateUid}`);
const getDirectDebitTransactions = (token, { mandateUid, since }) =>
  starling(token).get(`/direct-debit/mandates/${mandateUid}/payments`, { params: { since } });

const getDirectDebitForAccount = (token, { accountUid }) =>
  starling(token).delete(`/direct-debit/mandates/account/${accountUid}`);

const directDebit = {
  getAllDirectDebits,
  getDirectDebit,
  cancelDirectDebit,
  getDirectDebitTransactions,
  getDirectDebitForAccount,
};

module.exports = directDebit;
