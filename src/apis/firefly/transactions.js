const firefly = require("./firefly");

const getTransactions = () => firefly.get(`/transactions`);
const addTransaction = (transaction) => firefly.post(`/transactions`, transaction);

const getTransaction = (id) => firefly.get(`/transactions/${id}`);
const updateTransaction = (id, transaction) => firefly.put(`/transactions/${id}`, transaction);
const deleteTransaction = (id) => firefly.delete(`/transactions/${id}`);

const getAttachments = (id) => firefly.get(`/transactions/${id}/attachments`);
const getPiggyBankEvents = (id) => firefly.get(`/transactions/${id}/piggy_bank_events`);

const getLinks = (id) => firefly.get(`/transaction-journals/${id}/links`);
const getTransactionJournal = (id) => firefly.get(`/transaction-journals/${id}`);
const deleteTransactionSplit = (id) => firefly.delete(`/transaction-journals/${id}`);

const transactions = {
  getTransaction,
  getTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getAttachments,
  getPiggyBankEvents,
  getLinks,
  getTransactionJournal,
  deleteTransactionSplit,
};
module.exports = transactions;
