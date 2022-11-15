import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import { Box, Plane, Atak, ModalWindow } from "Components/components";
import Car from "models/Car";

import StartGame from "MenuComponents/StartGame/StartGame";
import Info from "MenuComponents/Info/Info";

import { useGame } from "./appHook";

import "./App.css";

function App() {
  const {
    currentScore,
    recordScore,
    gameOn,
    setGameOn,
    positionOnRoad,
    hurdles,
    setIsGameOver,
  } = useGame();
  return (
    <>
      <Info currentScore={currentScore} recordScore={recordScore} />
      <ModalWindow isOpen={!gameOn}>
        <StartGame setGameOn={setGameOn} />
      </ModalWindow>
      <Canvas camera={{ position: [-8.5, 3, 0] }}>
        <OrbitControls />
        <Physics>
          <color attach={"background"} args={["lightblue"]} />
          <hemisphereLight intensity={0.35} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={1}
            intesity={2}
            castShadow
          />
          <Suspense fallback={null}>
            <Car
              scale={0.005}
              position={[-5, 0, 0]}
              positionOnRoad={positionOnRoad}
            />
          </Suspense>
          <Atak
            hurdles={hurdles}
            positionOnRoad={positionOnRoad}
            setIsGameOver={setIsGameOver}
          />
          <Box position={[0, 0, 3]} />
          <Box position={[0, 0, -3]} />
          <Plane />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
