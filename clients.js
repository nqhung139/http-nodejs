const axios = require("axios").default;

async function main() {
  while (true) {
    var hadErr = false;
    console.log("requesting...");
    await axios
      .get(
        "https://http-nodejs-production-382c.up.railway.app/332.XHKG,331.XHKG,33.XHKG,303.XHKG,301.XHKG,30.XHKG,AL.XTSX,AL.XNYS,AI.XTSE,AF.XPAR",
        {
          timeout: 10000,
        }
      )
      .then(function (response) {
        console.log(response.data); // This will sometime be empty
      })
      .catch(function (error) {
        console.log("People we have an error!", error);
        hadErr = true;
      });
    if (hadErr) {
      // break out of the loop in case of error
      // maybe in a real live situation we could do something here*
      break;
    }
  }
}

main();
