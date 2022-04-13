const starling = require("./starling");

// API ENDPOINTS
const addMoneyToSavingGoal = (token, { accountUid, savingsGoalUid, transferUid, minorUnits, currency = "GBP" }) =>
  starling(token).put(`/account/${accountUid}/savings-goals/${savingsGoalUid}/add-money/${transferUid}`, {
    amount: { minorUnits, currency },
  });
const getRecurringTransfer = (token, { accountUid, savingsGoalUid }) =>
  starling(token).get(`/account/${accountUid}/savings-goals/${savingsGoalUid}/recurring-transfer`);
const createRecurringTransfer = (token, { accountUid, savingsGoalUid, recurringTransfer }) =>
  starling(token).put(`/account/${accountUid}/savings-goals/${savingsGoalUid}/recurring-transfer`, recurringTransfer);
const deleteRecurringTransfer = (token, { accountUid, savingsGoalUid }) =>
  starling(token).delete(`/account/${accountUid}/savings-goals/${savingsGoalUid}/recurring-transfer`);

const getSavingsGoals = (token, { accountUid }) => starling(token).get(`/account/${accountUid}/savings-goals`);
const createSavingsGoal = (token, { accountUid, savingsGoal }) =>
  starling(token).post(`/account/${accountUid}/savings-goals`, savingsGoal);
const getSavingsGoal = (token, { accountUid, savingGoalUid }) =>
  starling(token).get(`/account/${accountUid}/savings-goals/${savingGoalUid}`);
const updateSavingsGoal = (token, { accountUid, savingGoalUid, savingsGoal }) =>
  starling(token).put(`/account/${accountUid}/savings-goals/${savingGoalUid}`, savingsGoal);
const deleteSavingsGoal = (token, { accountUid, savingGoalUid }) =>
  starling(token).delete(`/account/${accountUid}/savings-goals/${savingGoalUid}`);
const getSavingsGoalPhoto = (token, { accountUid, savingGoalUid }) =>
  starling(token).get(`/account/${accountUid}/savings-goals/${savingGoalUid}/photo`);

const withdrawFromSavingsGoal = (token, { accountUid, savingGoalUid, transferUid, currency, minorUnits }) =>
  starling(token).get(`/account/${accountUid}/savings-goals/${savingGoalUid}/withdraw-money/${transferUid}`, {
    amount: {
      currency,
      minorUnits,
    },
  });

const savingsGoals = {
  addMoneyToSavingGoal,
  getRecurringTransfer,
  createRecurringTransfer,
  deleteRecurringTransfer,
  getSavingsGoal,
  createSavingsGoal,
  getSavingsGoals,
  updateSavingsGoal,
  getSavingsGoalPhoto,
  deleteSavingsGoal,
  withdrawFromSavingsGoal,
};

module.exports = savingsGoals;
