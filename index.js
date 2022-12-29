const express = require("express");
const { split, forEach, size, sampleSize, random, map } = require("lodash");
const EventEmitter = require("./event.js");
const app = express();

// create an instance of our event emitter
const eventEmitter = new EventEmitter();

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  }).catch(function () {});
}

async function main() {
  while (true) {
    const waitTimeMS = Math.floor(Math.random() * 1000);
    await sleep(waitTimeMS);
    eventEmitter.fire({ time: waitTimeMS });
  }
}

async function fireStreaming(objSymbols) {
  let isNext = true;
  const sizeData = size(objSymbols);

  while (isNext) {
    const waitTimeMS = Math.floor(Math.random() * 10000);
    await sleep(waitTimeMS);

    const symbolStream = sampleSize(objSymbols, 3);

    const result = map(symbolStream, (item) => ({
      symbol: item.symbol,
      exchange: item.exchange,
      quote: {
        trade_price: random(10, 300, true),
        change_point: random(0, 10, true),
        change_percent: random(0, 1, true),
      },
    }));

    eventEmitter.fire(result);
  }

  return function () {
    isNext = false;
  };
}

app.get("/:symbols", function (req, res) {
  const strSymbols = req.params.symbols;
  const arrSymbols = split(strSymbols, ",");
  const objSymbols = {};
  forEach(arrSymbols, (item) => {
    const [symbol, exchange] = split(item, ".");
    objSymbols[item] = { symbol, exchange };
  });

  const destroy = fireStreaming(objSymbols);

  const id = Date.now().toString(); // milliseconds of now will be fine for our case
  var timer = null;
  const handler = function (event) {
    clearTimeout(timer);
    console.log("event", event);
    res.status(201);
    res.end(JSON.stringify(event));
    destroy();
  };

  eventEmitter.register(id, handler);
  timer = setTimeout(function () {
    console.log("timeout");
    const wasUnregistered = eventEmitter.unregister(id);
    console.log("wasUnregistered", wasUnregistered);
    if (wasUnregistered) {
      res.status(200);
      res.end();
      destroy();
    }
  }, 5000);
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
