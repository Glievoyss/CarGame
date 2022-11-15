import React from "react";

import { Hurdle } from "Components/components";

import { parsPosition } from "utils/utils";

const Atak = ({ hurdles, positionOnRoad, setIsGameOver }) => {
  return (
    <>
      {hurdles.map((hurdle, index) => (
        <Hurdle
          key={index}
          position={[150, 0, parsPosition(hurdle.position)]}
          positionOnRoad={positionOnRoad}
          hurdle={hurdle}
          setIsGameOver={setIsGameOver}
        />
      ))}
    </>
  );
};

export default Atak;
