import React from "react";
import { usePlane } from "@react-three/cannon";

const Plane = (props) => {
  const [ref] = usePlane(() => ({
    position: [0, -0.18, 0],
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));

  return (
    <mesh receiveShadow ref={ref}>
      <planeBufferGeometry args={[1000, 1000]} />
    </mesh>
  );
};

export default Plane;
