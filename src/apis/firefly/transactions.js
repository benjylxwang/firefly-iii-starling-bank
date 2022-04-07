const axios = require("axios");

const TRANSACTIONS_ENDPOINT = process.env.FIREFLY_BASE_URL + "/transactions";

const createTransaction = async (transaction) => {
  const response = await axios.get(TRANSACTIONS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: transaction,
  });

  return response.ok;
};

module.exports = {
  createTransaction,
};
