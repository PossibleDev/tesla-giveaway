import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import Router from "./Router";

function App() {
   return (
      <Fragment>
         <div id="stars"></div>
         <div id="stars2"></div>
         <div id="stars3"></div>
         <Router />
      </Fragment>
   );
}

export default App;
