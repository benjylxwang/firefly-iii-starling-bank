const starling = require("./starling");

// API ENDPOINTS
const getStandingOrders = (token, accountUid, categoryUid) =>
  starling(token).get(`/payments/local/account/${accountUid}/category/${categoryUid}/standing-orders`);
const createStandingOrder = (token, accountUid, categoryUid, standingOrder) =>
  starling(token).put(`/payments/local/account/${accountUid}/category/${categoryUid}/standing-orders`, standingOrder);

const getStandingOrder = (token, accountUid, categoryUid, paymentOrderUid) =>
  starling(token).get(
    `/payments/local/account/${accountUid}/category/${categoryUid}/standing-orders/${paymentOrderUid}`
  );
const getStandingOrderNextPayments = (token, accountUid, categoryUid, paymentOrderUid, count = 10) =>
  starling(token).get(
    `/payments/local/account/${accountUid}/category/${categoryUid}/standing-orders/${paymentOrderUid}/upcoming-payments`,
    { params: { count } }
  );
const updateStandingOrder = (
  token,
  accountUid,
  categoryUid,
  paymentOrderUid,
  reference,
  amount,
  standingOrderRecurrence,
  spendingCategory = undefined
) =>
  starling(token).put(
    `/payments/local/account/${accountUid}/category/${categoryUid}/standing-orders/${paymentOrderUid}`,
    { paymentOrderUid, reference, amount, standingOrderRecurrence, spendingCategory }
  );
const deleteStandingOrder = (token, accountUid, categoryUid, paymentOrderUid) =>
  starling(token).delete(
    `/payments/local/account/${accountUid}/category/${categoryUid}/standing-orders/${paymentOrderUid}`
  );

const getPaymentOrder = (token, paymentOrderUid) =>
  starling(token).get(`/payments/local/payment-order/${paymentOrderUid}`);
const getPaymentOrderPayments = (token, paymentOrderUid) =>
  starling(token).get(`/payments/local/payment-order/${paymentOrderUid}/payments`);

const createPayment = (token, accountUid, categoryUid, payment) =>
  starling(token).put(`/payments/local/account/${accountUid}/category/${categoryUid}`, payment);

const payments = {
  createPayment,
  getPaymentOrder,
  getPaymentOrderPayments,
  deleteStandingOrder,
  getStandingOrder,
  getStandingOrderNextPayments,
  getStandingOrders,
  updateStandingOrder,
  createStandingOrder,
};

module.exports = payments;
