import React, { Fragment, useEffect, useState } from "react";

import {
   generateHash,
   generateRandom,
   randomWholeNumber,
} from "../helper/functions";
const EthereumTable = () => {
   const sent1 = randomWholeNumber(300, 100000),
      rstr1 = sent1 * 2;
   const [transactions, setTransactions] = useState<any>([
      {
         receiver: generateRandom("D", 15),
         sent: sent1,
         receive: rstr1,
         hash: generateHash(10),
         sentHash: generateHash(25),
         receiveHash: generateHash(25),
         sentCharge: (1 / 100) * sent1,
         receiveCharge: (1 / 100) * rstr1,
      },
   ] as any);

   useEffect(() => {
      setInterval(() => {
         const receiver = generateRandom("D", 15),
            sentHash = generateHash(25),
            receiveHash = generateHash(25),
            sent = randomWholeNumber(300, 70000),
            receive = sent * 2,
            sentCharge = (2 / 100) * sent,
            receiveCharge = (2 / 100) * receive;

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
                        310399
                     </div>
                     <div className="age col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        right now
                     </div>
                     <div className="address-btc-sec col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        DGrKkg9iLuShdZ7G9z7Et6FijR9Js18E6E
                     </div>
                     <div className="out-trans col-lg-1 col-md-1 col-sm-2 col-xs-2">
                        OUT
                     </div>
                     <div className="address-btc col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        {trans.receiver}...
                     </div>
                     <div className="value-sum col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        {trans.receive} DOGE
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
                        310399
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
                        DGrKkg9iLuShdZ7G9z7Et6FijR9Js18E6E
                     </div>
                     <div className="value-sum col-lg-1 col-md-1 col-sm-1 col-xs-1">
                        {trans.sent} DOGE
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
export default EthereumTable;
