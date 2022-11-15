import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { randomInteger } from "utils/utils";

export const useGame = () => {
  const [gameOn, setGameOn] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [trigerAddHurdle, setTrigerAddHurdle] = useState(false);
  const [positionOnRoad, setPositionOnRoad] = useState(2);
  const [hurdles, setHurdles] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [recordScore, setRecordScore] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", keydown);
    return () => {
      document.removeEventListener("keydown", keydown);
    };
  }, []);

  useEffect(() => {
    if (trigerAddHurdle !== false) {
      setHurdles((prev) => {
        let newHurdles = [
          ...prev,
          { nameID: nanoid(5), position: randomInteger(1, 3) },
        ];
        return newHurdles;
      });
      setCurrentScore((prev) => prev + 1);
    }
  }, [trigerAddHurdle]);

  useEffect(() => {
    if (gameOn) {
      setInterval(() => {
        setTrigerAddHurdle(nanoid(3));
      }, 250);
    }
  }, [gameOn]);

  useEffect(() => {
    if (isGameOver) {
      setHurdles([]);
      setRecordScore(currentScore > recordScore ? currentScore : recordScore);
      setCurrentScore(0);
      setIsGameOver(false);
    }
    // eslint-disable-next-line
  }, [isGameOver]);

  const keydown = (e) => {
    if (e.code === "ArrowLeft") {
      setPositionOnRoad((prev) => (prev === 1 ? 1 : prev - 1));
    } else if (e.code === "ArrowRight") {
      setPositionOnRoad((prev) => (prev === 3 ? 3 : prev + 1));
    }
  };

  return {
    currentScore,
    recordScore,
    gameOn,
    setGameOn,
    positionOnRoad,
    hurdles,
    setIsGameOver,
  };
};
