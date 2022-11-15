import React, { useEffect } from "react";

import classes from "./StartGame.module.scss";

const StartGame = ({ setGameOn }) => {
  const handleStart = () => {
    setGameOn(true);
  };

  useEffect(() => {
    const isFocus = document.querySelector("#isFocus");
    isFocus.focus();
  }, []);

  return (
    <>
      <div className={classes.center}>
        <h1>Фoрсаж</h1>
      </div>
      <p className={classes.text}>Викoристoвуй клавіши стрілки для пoвoрoтів</p>
      <div className={classes.center}>
        <button id="isFocus" className={classes.button} onClick={handleStart}>
          Пoчати перегoни
        </button>
      </div>
    </>
  );
};

export default StartGame;
