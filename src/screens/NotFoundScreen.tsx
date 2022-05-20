import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
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
                     <span style={{ fontSize: "4rem" }}>404</span>
                     <br />
                     <br />
                     <span className="yel">PAGE NOT FOUND</span>
                     <br />
                     <br />
                     <Link to="/">
                        <button className="copy btn">GO HOME</button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default NotFoundScreen;
