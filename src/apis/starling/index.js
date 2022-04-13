const accountHolder = require("./accountHolder");
const accounts = require("./accounts");
const addresses = require("./addresses");
const cards = require("./cards");
const directDebit = require("./directDebit");
const feed = require("./feed");
const identity = require("./identity");
const insights = require("./insights");
const kyc = require("./kyc");
const onboarding = require("./onboarding");
const payees = require("./payees");
const payments = require("./payments");
const savingsGoals = require("./savingsGoals");
const settleUp = require("./settleUp");

const starling = {
  accountHolder,
  accounts,
  addresses,
  cards,
  directDebit,
  feed,
  identity,
  insights,
  kyc,
  onboarding,
  payees,
  payments,
  savingsGoals,
  settleUp,
};

module.exports = starling;
