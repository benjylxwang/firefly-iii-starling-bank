const starling = require("./starling");

// API ENDPOINTS
const getCards = (token) => starling(token).get(`/cards`);

// Updates
const updateATMControl = (token, cardUid, enabled) =>
  starling(token).put(`/cards/${cardUid}/controls/atm-enabled`, { enabled });
const updateCardLock = (token, cardUid, enabled) =>
  starling(token).put(`/cards/${cardUid}/controls/enabled`, { enabled });
const updateCurrencySwitch = (token, cardUid, enabled, currency) =>
  starling(token).put(`/cards/${cardUid}/controls/atm-enabled`, { enabled, currency });
const updateGamblingEnabled = (token, cardUid, enabled) =>
  starling(token).put(`/cards/${cardUid}/controls/gambling-enabled`, { enabled });
const updateMagStripeEnabled = (token, cardUid, enabled) =>
  starling(token).put(`/cards/${cardUid}/controls/mag-stripe-enabled`, { enabled });
const updateMobileWalletEnabled = (token, cardUid, enabled) =>
  starling(token).put(`/cards/${cardUid}/controls/mobile-wallet-enabled`, { enabled });
const updateOnlineEnabled = (token, cardUid, enabled) =>
  starling(token).put(`/cards/${cardUid}/controls/online-enabled`, { enabled });

// Update card present payments (contactless and chip and pin) control
const updateCardPresentEnabled = (token, cardUid, enabled) =>
  starling(token).put(`/cards/${cardUid}/controls/pos-enabled`, { enabled });

const cards = {
  getCards,
  updateATMControl,
  updateCardLock,
  updateCurrencySwitch,
  updateGamblingEnabled,
  updateMagStripeEnabled,
  updateMobileWalletEnabled,
  updateOnlineEnabled,
  updateCardPresentEnabled,
};

module.exports = cards;
