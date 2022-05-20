import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faSpinner } from "@fortawesome/free-solid-svg-icons";
import copy from "copy-to-clipboard";

import ProgressBar from "../components/ProgressBar";
import DogecoinTable from "../components/DogecoinTable";

const DogeScreen = () => {
   const [clicked, setClicked] = useState(false);
   const [copied, setCopied] = useState(false);

   const copyToClipboard = () => {
      copy("DGrKkg9iLuShdZ7G9z7Et6FijR9Js18E6E");
      setCopied(true);
      setTimeout(() => {
         setCopied(false);
      }, 2000);
   };
   return (
      <Fragment>
         <div className="container-fluid giveaway">
            <div className="block col-lg-7 offset-lg-5">
               <Link to="/">
                  <div className="col-lg-6 offset-lg-3 logo">
                     <img alt="logo" src="tesla-logo.png" />{" "}
                     <span className="logo_txt"></span>{" "}
                  </div>
               </Link>
               <div className="row">
                  <div className="col-lg-12 verify">
                     To verify your address, just send from 300 to 100,000 DOGE
                     to the address below and get from 600 to 200,000 DOGE{" "}
                     <span className="yel">( x2 back).</span>
                     <br />
                     <span className="yel">P.S. one time use only</span>
                  </div>
               </div>
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="row main_giveaway">
                           <div className="col-lg-8 col-sm-8 col-xs-8">
                              <div className="title">
                                 <span className="yel">Payment Address</span>
                              </div>
                              <div className="subtitle">
                                 You can send DOGE to the following address:
                              </div>
                              <div className="wallet">
                                 <span className="yel">
                                    DGrKkg9iLuShdZ7G9z7Et6FijR9Js18E6E
                                 </span>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="qr">
                                 <img
                                    alt="QR"
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DGrKkg9iLuShdZ7G9z7Et6FijR9Js18E6E"
                                 />
                              </div>
                           </div>
                           <div className="buffer">
                              <button
                                 className="btn copy text-white"
                                 onClick={copyToClipboard}
                              >
                                 <FontAwesomeIcon icon={faCopy} />
                                 {"  "}
                                 Copy Address to Clipboard
                              </button>
                              <br />
                              {copied && (
                                 <h6 className="h5 mt-3 yel">
                                    Address copied!
                                 </h6>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="instruction" className="instruction col-lg-8 offset-lg-2">
               <div className="guide col-lg-12">
                  <span className="yel">Instruction:</span>
                  <br /> - To make a transaction, you can use any wallet or
                  exchange to participate!
                  <br /> - One-time use only, once we receive your transaction,
                  we will immediately send the requested amount back to you.
               </div>
               <div className="wait">
                  <FontAwesomeIcon icon={faSpinner} className="rotating" />
                  Waiting for payment
               </div>
               <div id="info-fir" className="info">
                  {!clicked && (
                     <span>
                        Still waiting for transaction?{" "}
                        <button
                           pl-js-close="info-fir"
                           pl-js-open="info-sec"
                           className="click copy btn"
                           onClick={() => setClicked(true)}
                        >
                           Click Here
                        </button>
                     </span>
                  )}
                  {clicked && (
                     <span id="mess">
                        Sometimes transactions are not sent properly.
                        <br />
                        Try sending again.
                     </span>
                  )}
                  <br /> Once we receive your transaction, the outgoing
                  transaction is processed to your address.
                  <br /> Every address that is sent too late, gets their DOGE
                  immediately sent back.
               </div>
               <div id="info-sec" style={{ display: "none" }} className="info">
                  Sometimes transactions are not sent properly.
                  <br /> Try sending it again.
                  <br /> Remember, every transaction address we receive gets
                  their DOGE back + giveaway prize.
               </div>
               <div
                  className="dot-1"
                  id="leftBTC"
                  style={{
                     textShadow: "0px 0px 16px rgba(54, 209, 220, 0.6)",
                     color: "#17a2b8",
                     marginTop: "2rem",
                  }}
               >
                  DOGE left
               </div>
               <ProgressBar currentValue={1000000} maxValue={4000000} />
               <br />
            </div>
            <div className="last_trans">
               <h1 className="f-24 mvn em-300">
                  Transactions for Address:
                  <span id="trnsctin">DGrKkg9iLuShdZ7G9z7Et6FijR9Js18E6E</span>
               </h1>
            </div>

            <DogecoinTable />
         </div>
      </Fragment>
   );
};

export default DogeScreen;
