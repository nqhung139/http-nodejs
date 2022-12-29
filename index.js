const express = require("express");
const { split, forEach, size, sampleSize, random, map } = require("lodash");
const app = express();

// create an instance of our event emitter

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  }).catch(function () {});
}

async function fireStreaming(res, objSymbols) {
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

    res.write(JSON.stringify(result));
  }
}

app.get("/:symbols", function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  const strSymbols = req.params.symbols;
  const arrSymbols = split(strSymbols, ",");
  const objSymbols = {};
  forEach(arrSymbols, (item) => {
    const [symbol, exchange] = split(item, ".");
    objSymbols[item] = { symbol, exchange };
  });

  fireStreaming(res, objSymbols);
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
