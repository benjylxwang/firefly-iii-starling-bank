const starling = require("./starling");

// Transactions
const updateSpendingCategory = (
  token,
  {
    accountUid,
    categoryUid,
    feedItemUid,
    spendingCategory,
    permanentSpendingCategoryUpdate = false,
    previousSpendingCategoryReferencesUpdate = false,
  }
) =>
  starling(token).put(`/feed/account/${accountUid}/category/${categoryUid}/${feedItemUid}/spending-category`, {
    spendingCategory,
    permanentSpendingCategoryUpdate,
    previousSpendingCategoryReferencesUpdate,
  });

const updateUserNote = (token, { accountUid, categoryUid, feedItemUid, userNote }) =>
  starling(token).put(`/feed/account/${accountUid}/category/${categoryUid}/${feedItemUid}/user-note`, {
    userNote,
  });

const getReceipts = (token, { accountUid, categoryUid, feedItemUid }) =>
  starling(token).get(`/feed/account/${accountUid}/category/${categoryUid}/${feedItemUid}/receipts`);
const getReceipt = (token, { accountUid, categoryUid, feedItemUid }) =>
  starling(token).get(`/feed/account/${accountUid}/category/${categoryUid}/${feedItemUid}/receipt`);
const submitReceipt = (token, { accountUid, categoryUid, feedItemUid, receipt }) =>
  starling(token).put(`/feed/account/${accountUid}/category/${categoryUid}/${feedItemUid}/receipt`, receipt);

const getAttachments = (token, { accountUid, categoryUid, feedItemUid }) =>
  starling(token).get(`/feed/account/${accountUid}/category/${categoryUid}/${feedItemUid}/attachments`);
const getAttachment = (token, { accountUid, categoryUid, feedItemUid, feedItemAttachmentUid }) =>
  starling(token).get(
    `/feed/account/${accountUid}/category/${categoryUid}/${feedItemUid}/attachments/${feedItemAttachmentUid}`
  );

const getFeedItems = (token, { accountUid, categoryUid, feedItemUid, changedSince = Date.now() }) =>
  starling(token).get(`/feed/account/${accountUid}/category/${categoryUid}/${feedItemUid}`, {
    params: { changedSince },
  });
const getFeedItem = (token, { accountUid, categoryUid, feedItemUid }) =>
  starling(token).get(`/feed/account/${accountUid}/category/${categoryUid}/${feedItemUid}`);
const getFeedItemMastercard = (token, { accountUid, categoryUid, feedItemUid }) =>
  starling(token).get(`/feed/account/${accountUid}/category/${categoryUid}/${feedItemUid}/mastercard`);

const getTransactionsBetween = (token, { accountUid, categoryUid, minTransactionTimestamp, maxTransactionTimestamp }) =>
  starling(token).get(`/feed/account/${accountUid}/category/${categoryUid}/transactions-between`, {
    params: { minTransactionTimestamp, maxTransactionTimestamp },
  });
const getSettledTransactionsBetween = (token, { accountUid, minTransactionTimestamp, maxTransactionTimestamp }) =>
  starling(token).get(`/feed/account/${accountUid}/settled-transactions-between`, {
    params: { minTransactionTimestamp, maxTransactionTimestamp },
  });

// Round up
const getRoundUp = (token, { accountUid }) => starling(token).get(`/feed/account/${accountUid}/round-up`);
const updateRoundUp = (token, { accountUid, roundUpGoalUid, roundUpMultiplier }) =>
  starling(token).put(`/feed/account/${accountUid}/round-up`, { roundUpGoalUid, roundUpMultiplier });
const deleteRoundUp = (token, { accountUid }) => starling(token).put(`/feed/account/${accountUid}/round-up`);

const feed = {
  updateSpendingCategory,
  updateUserNote,
  getAttachment,
  getAttachments,
  getFeedItem,
  getFeedItemMastercard,
  getFeedItems,
  getTransactionsBetween,
  getSettledTransactionsBetween,
  getReceipt,
  getReceipts,
  submitReceipt,
  getRoundUp,
  updateRoundUp,
  deleteRoundUp,
};

module.exports = feed;
