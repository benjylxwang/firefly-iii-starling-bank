let express = require("express");
let router = express.Router();

let starling = require("../apis/starling");

router.post("/webhooks/feed-item", async (req, res, next) => {
  try {
    console.log("Received feed item!", req.body);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.post("/webhooks/standing-order-payment", async (req, res, next) => {
  try {
    console.log("Standing order payment event", req.body);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.post("/webhooks/standing-order", async (req, res, next) => {
  try {
    console.log("Standing order event", req.body);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.post("/:section/:function", async function (req, res, next) {
  try {
    let token = global.secrets.PERSONAL_ACCESS_TOKENS[0].token;
    if (req.params.account) {
      for (let account of global.secrets.PERSONAL_ACCESS_TOKENS) {
        if (account.name === req.params.account) {
          token = account.token;
        }
      }
    }

    let section = starling[req.params.section];
    let func = section[req.params.function];
    let result = await func(token, req.body);
    res.json(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
