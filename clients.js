const axios = require("axios").default;

async function main() {
  while (true) {
    var hadErr = false;
    console.log("requesting...");
    await axios
      .get(
        "https://http-nodejs-production-382c.up.railway.app/BRBY.XLON,BMW3.XETR,BMW.XETR,AMC.XLON,AML.XLON,332.XHKG,331.XHKG,33.XHKG,303.XHKG,301.XHKG,30.XHKG,AL.XTSX,AL.XNYS,AI.XTSE,AF.XPAR,AH.XTSE,AE.XTSX,AE.XASE,AC.XTSE,AC.XPAR,AC.XNYS,AB.XPAR,AB.XNYS,AA.XNYS,A.XTSX,A.XNYS,AAPL.XNAS,CMET.XLON,META.XNAS,AMS.XLON,UKR.XLON,UKW.XLON,UKCM.XLON,UKML.XLON,UKMV.XLON,UKOG.XLON,UKSR.XLON,AUK.XLON,CUK.XNYS,EU.XTSX,EUA.XLON,EUE.XLON,700.XHKG,8150.XHKG,8562.XHKG,STRM.XNAS,688099.XSHG,AMLX.XNAS,CAML.XLON,AML.XTSX,AMLP.ARCX,BHP.XLON,BHP.XNYS",
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
