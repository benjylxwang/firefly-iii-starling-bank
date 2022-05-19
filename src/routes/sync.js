var express = require("express");
const starling = require("../apis/starling");
var router = express.Router();

//
router.post("/", async (req, res, next) => {
  try {
    // Get account data
    let accounts = await starling.accounts.getAccounts(req.token);
    let account = account.data[0];
  } catch (err) {
    next(err);
  }
});

module.exports = router;
