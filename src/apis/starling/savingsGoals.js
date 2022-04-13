const starling = require("./starling");

// API ENDPOINTS
const addMoneyToSavingGoal = (token, accountUid, savingsGoalUid, transferUid, minorUnits, currency = "GBP") =>
  starling(token).put(`/account/${accountUid}/savings-goal/${savingsGoalUid}/add-money/${transferUid}`, {
    amount: { minorUnits, currency },
  });
const getRecurringTransfer = (token, accountUid, savingsGoalUid) =>
  starling(token).get(`/account/${accountUid}/savings-goal/${savingsGoalUid}/recurring-transfer`);
const createRecurringTransfer = (token, accountUid, savingsGoalUid, recurringTransfer) =>
  starling(token).put(`/account/${accountUid}/savings-goal/${savingsGoalUid}/recurring-transfer`, recurringTransfer);
  const deleteRecurringTransfer = (token, accountUid, savingsGoalUid) =>
    starling(token).delete(`/account/${accountUid}/savings-goal/${savingsGoalUid}/recurring-transfer`, recurringTransfer);

const savingsGoal = {
  addMoneyToSavingGoal, getRecurringTransfer, createRecurringTransfer, deleteRecurringTransfer
};

module.exports = savingsGoal;
