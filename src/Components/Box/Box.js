import React from "react";

const Box = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[1000, 1, 1]} />
      <meshLambertMaterial attach={"material"} color="blue" />
    </mesh>
  );
};

export default Box;
