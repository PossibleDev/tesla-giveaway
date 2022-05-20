import React, { Fragment, useEffect, useState } from "react";

import {
   generateHash,
   generateRandom,
   randomWholeNumber,
   randomDecimalNumber,
} from "../helper/functions";
const BitcoinTable = () => {
   const sent1 = randomDecimalNumber(0.001, 10, 4),
      rstr1 = ((30 / 100) * sent1 + sent1).toFixed(4),
      rec = parseFloat(rstr1);
   const [transactions, setTransactions] = useState<any>([
      {
         receiver: generateRandom("0x", 15),
         sent: sent1,
         receive: rec,
         hash: generateHash(10),
         sentHash: generateHash(25),
         receiveHash: generateHash(25),
         sentCharge: (1 / 100) * sent1,
         receiveCharge: (1 / 100) * rec,
      },
   ] as any);

   useEffect(() => {
      setInterval(() => {
         const receiver = generateRandom("0x", 15),
            sentHash = generateHash(25),
            receiveHash = generateHash(25),
            sent = randomDecimalNumber(0.01, 9, 4),
            rstr = ((30 / 100) * sent + sent).toFixed(4),
            receive = parseFloat(rstr),
            sentCharge = (1 / 100) * sent,
            receiveCharge = (1 / 100) * receive;

         let newArray = {
            receiver,
            sentHash,
            receiveHash,
            sent,
            receive,
            sentCharge,
            receiveCharge,
         };
         setTransactions((transactions: any): any => {
            if (transactions.length < 7) {
               return [...transactions, newArray];
            } else {
               return [newArray];
            }
         });
      }, randomWholeNumber(5000, 20000));
   }, []);

   const trans = transactions?.map((trans: any): any => {
      return (
         <div className="trans-table">
            <div className="inner">
               <div className="top" style={{ display: "block" }}>
                  <div className="row row-trans-out">
                     <div className="hash col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        {trans.receiveHash}...
                     </div>
                     <div className="block-num col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        503124
                     </div>
                     <div className="age col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        right now
                     </div>
                     <div className="address-btc-sec col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        0x9A8bdC5EbFBB628b566a03664a8d5C5f56DA3fe7
                     </div>
                     <div className="out-trans col-lg-1 col-md-1 col-sm-2 col-xs-2">
                        OUT
                     </div>
                     <div className="address-btc col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        {trans.receiver}...
                     </div>
                     <div className="value-sum col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        {trans.receive} ETH
                     </div>
                     <div className="tx-fee col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        {trans.receiveCharge}...
                     </div>
                  </div>
               </div>
               <div className="bottom">
                  <div className="row row-trans-in">
                     <div className="hash col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        {trans.sentHash}...
                     </div>
                     <div className="block-num col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        503124
                     </div>
                     <div className="age col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        few seconds ago
                     </div>
                     <div className="address-btc col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        {trans.receiver}...
                     </div>
                     <div className="in-trans col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        IN
                     </div>
                     <div className="address-btc-sec col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        0x9A8bdC5EbFBB628b566a03664a8d5C5f56DA3fe7
                     </div>
                     <div className="value-sum col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        {trans.sent} ETH
                     </div>
                     <div className="tx-fee col-lg-1 col-md-1 col-sm-2 col-xs-2">
                        {trans.sentCharge}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   });

   return (
      <Fragment>
         <div className="row header-trans m-1">
            <div className="hash col-lg-3 col-md-3 col-sm-3 col-xs-3">
               TxHash
            </div>
            <div className="block-num col-lg-1 col-md-1 col-sm-1 col-xs-1">
               Block
            </div>
            <div className="age col-lg-1 col-md-1 col-sm-1 col-xs-1">Age</div>
            <div className="address-btc col-lg-2 col-md-2 col-sm-2 col-xs-2">
               From
            </div>
            <div className="in-trans col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            <div className="address-btc-sec col-lg-2 col-md-2 col-sm-2 col-xs-2">
               To
            </div>
            <div className="value-sum col-lg-1 col-md-1 col-sm-1 col-xs-1">
               Value
            </div>
            <div className="tx-fee col-lg-1 col-md-1 col-sm-2 col-xs-2">
               TxFee
            </div>
         </div>
         <Fragment>{trans}</Fragment>
      </Fragment>
   );
};
export default BitcoinTable;
