const starling = require("./starling");

// API ENDPOINTS
const getPayees = (token) => starling(token).get(`/payees`);
const createPayee = (token, payee) => starling(token).put(`/payees`, payee);
const updatePayee = (token, payeeUid, payee) => starling(token).put(`/payees/${payeeUid}`, payee);
const deletePayee = (token, payeeUid) => starling(token).delete(`/payees/${payeeUid}`);
const createPayeeAccount = (token, payeeUid, payeeAccount) =>
  starling(token).put(`/payees/${payeeUid}/account`, payeeAccount);
const deletePayeeAccount = (token, payeeUid, accountUid) =>
  starling(token).delete(`/payees/${payeeUid}/account/${accountUid}`);

const getImageForPayee = (token, payeeUid) => starling(token).get(`/payees/${payeeUid}/image`);

const getScheduledPaymentsForPayee = (token, payeeUid, accountUid) =>
  starling(token).get(`/payees/${payeeUid}/account/${accountUid}/scheduled-payments`);
const getPaymentsForPayee = (token, payeeUid, accountUid) =>
  starling(token).get(`/payees/${payeeUid}/account/${accountUid}/payments`);

const payees = {
  getPayees,
  createPayee,
  updatePayee,
  deletePayee,
  createPayeeAccount,
  deletePayeeAccount,
  getImageForPayee,
  getScheduledPaymentsForPayee,
  getPaymentsForPayee,
};

module.exports = payees;
