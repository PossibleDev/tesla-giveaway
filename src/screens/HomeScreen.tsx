import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import BitcoinTable from "../components/BitcoinTable";

const HomeScreen = () => {
   return (
      <Fragment>
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12 float-right">
                  <div className="mt-3">
                     <img src="tesla-logo.png" alt="tesla logo" />
                  </div>
                  <div className="text-cyan home-captions">
                     Our marketing department here at Tesla HQ came up with an
                     idea: to hold a special giveaway event for all crypto fans
                     out there.
                  </div>
                  <div
                     className="text-cyan home-captions"
                     style={{ fontSize: "40px" }}
                  >
                     If you want to participate, it is really simple to do. Just
                     navigate to these websites to learn more:
                  </div>
                  <div className="row">
                     <div className="col-md-4"></div>
                     <div className="col-md-4">
                        <div className="buffer">
                           <Link to="/bitcoin-giveaway">
                              <button className="copy btn text-white">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-currency-bitcoin"
                                    width="2rem"
                                    height="2rem"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#ffffff"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 >
                                    <path
                                       stroke="none"
                                       d="M0 0h24v24H0z"
                                       fill="none"
                                    />
                                    <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
                                    <line x1="8" y1="6" x2="8" y2="18" />
                                    <line x1="8" y1="12" x2="14" y2="12" />
                                    <line x1="9" y1="3" x2="9" y2="6" />
                                    <line x1="13" y1="3" x2="13" y2="6" />
                                    <line x1="9" y1="18" x2="9" y2="21" />
                                    <line x1="13" y1="18" x2="13" y2="21" />
                                 </svg>
                                 get BTC
                              </button>
                           </Link>
                        </div>

                        <br />
                        <div className="buffer">
                           <Link to="/ethereum-giveaway">
                              <button className="copy btn text-white">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-currency-ethereum"
                                    width="2rem"
                                    height="2rem"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#ffffff"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 >
                                    <path
                                       stroke="none"
                                       d="M0 0h24v24H0z"
                                       fill="none"
                                    />
                                    <path d="M6 12l6 -9l6 9l-6 9z" />
                                    <path d="M6 12l6 -3l6 3l-6 2z" />
                                 </svg>
                                 get ETH
                              </button>
                           </Link>
                        </div>

                        <br />

                        <div className="buffer">
                           <Link to="/dogecoin-giveaway">
                              <button className="copy btn text-white">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-currency-dogecoin"
                                    width="2rem"
                                    height="2rem"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#ffffff"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 >
                                    <path
                                       stroke="none"
                                       d="M0 0h24v24H0z"
                                       fill="none"
                                    />
                                    <path d="M6 12h6" />
                                    <path d="M9 6v12" />
                                    <path d="M6 18h6a6 6 0 1 0 0 -12h-6" />
                                 </svg>
                                 get DOGE
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <br />
                  <br />
                  <br />
               </div>
            </div>
            <BitcoinTable />
            <div className="col-lg-12 verify">
               We have made a wonderful innovation where powerful Tesla machines
               are mining crypto at breakneck speeds, relying on clean
               electricity sources. .
               <br />
            </div>
            <br />
            <br />
            <br />
            <footer>
               <p style={{ color: "DodgerBlue" }}>
                  Copyright © 2022 Tesla. All rights reserved.
               </p>
            </footer>
         </div>
      </Fragment>
   );
};

export default HomeScreen;
