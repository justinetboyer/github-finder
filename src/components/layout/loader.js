import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const loader = () => 
    <Fragment>
      <img
        src={spinner}
        alt=".."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>

export default loader;
