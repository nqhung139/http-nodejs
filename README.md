---
title: Node HTTP Module
description: A HTTP module server
tags:
  - http
  - nodejs
  - javascript
---

# HTTP Module Example

This example starts an [HTTP Module](https://nodejs.org/api/http.html) server.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/ZweBXA)

## 💁‍♀️ How to use

- Install dependencies `yarn`
- Connect to your Railway project `railway link`
- Start the development server `railway run yarn start`

## 📝 Notes

The server started simply returns a `Hello World` payload. The server code is located in `server.mjs`.

<!-- https://magpie-dev2-market-feed.equix.app/v1/price/332.XHKG,331.XHKG,33.XHKG,303.XHKG,301.XHKG,30.XHKG,AL.XTSX,AL.XNYS,AI.XTSE,AF.XPAR,AH.XTSE,AE.XTSX,AE.XASE,AC.XTSE,AC.XPAR,AC.XNYS,AB.XPAR,AB.XNYS,AA.XNYS,A.XTSX,A.XNYS,AAPL.XNAS,CMET.XLON,META.XNAS,AMS.XLON,AMC.XLON,UKR.XLON,UKW.XLON,UKCM.XLON,UKML.XLON,UKMV.XLON,UKOG.XLON,UKSR.XLON,AUK.XLON,CUK.XNYS,EU.XTSX,EUA.XLON,EUE.XLON,700.XHKG,8150.XHKG,8562.XHKG,STRM.XNAS,688099.XSHG,AMLX.XNAS,CAML.XLON,AML.XLON,AML.XTSX,AMLP.ARCX,BHP.XLON,BHP.XNYS -->

symbol,
exchange,
quote : {

trade_price: tradePrice,
change_point: changePoint,
change_percent: changePercent,
indicative_price: preMarketPrice,
previous_close: prevClose,
session: session1,
extended_trade_price: extended_trade_price,
extended_change_point: extended_change_point,
extended_change_percent: extended_change_percent,

}
