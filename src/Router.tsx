import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import HomeScreen from "./screens/HomeScreen";
import BitcoinScreen from "./screens/BitcoinScreen";
import EthereumScreen from "./screens/EthereumScreen";
import DogeScreen from "./screens/DogeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

const Router = () => {
   return (
      <BrowserRouter>
         <ScrollToTop>
            <Routes>
               <Route path="/" element={<HomeScreen />} />
               <Route path="/bitcoin-giveaway" element={<BitcoinScreen />} />
               <Route path="/ethereum-giveaway" element={<EthereumScreen />} />
               <Route path="/dogecoin-giveaway" element={<DogeScreen />} />
               <Route path="*" element={<NotFoundScreen />} />
            </Routes>
         </ScrollToTop>
      </BrowserRouter>
   );
};

export default Router;
