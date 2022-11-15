import React from "react";

import classes from "./Info.module.scss";

const Info = ({ currentScore, recordScore }) => {
  return (
    <>
      <div className={classes.infoBox}>
        <p>
          Score: <span>{currentScore}</span>
        </p>
        <p>
          Record Score: <span>{recordScore}</span>
        </p>
      </div>
    </>
  );
};

export default Info;
