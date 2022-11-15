import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Hurdle = (props) => {
  const { hurdle, positionOnRoad, setIsGameOver } = props;
  const ref = useRef();

  useFrame(() => {
    ref.current.position.x -= 0.7;
    if (
      hurdle.position === positionOnRoad &&
      ref.current.position.x < -3 &&
      ref.current.position.x > -6
    ) {
      setIsGameOver(true);
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial attach={"material"} color="red" />
    </mesh>
  );
};

export default Hurdle;
