import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const carModel = useRef();
  const positionOnRoad = props.positionOnRoad;

  const {
    nodes,
    materials,
    // animations
  } = useGLTF("/car/low-poly_truck_car_drifter.glb", true);
  // const { actions, mixer } = useAnimations(animations, carModel);

  // useEffect(() => {
  //   actions["Car engine"].play();
  // }, [mixer]);

  const wheel1 = useRef();
  const wheel2 = useRef();
  const wheel3 = useRef();
  const wheel4 = useRef();

  useFrame(() => {
    wheel1.current.rotation.z -= 0.05;
    wheel2.current.rotation.z -= 0.05;
    wheel3.current.rotation.z += 0.05;
    wheel4.current.rotation.z += 0.05;

    if (positionOnRoad === 1) {
      if (carModel.current.position.z > -1.5) {
        carModel.current.position.z -= 0.1;
      }
    }
    if (positionOnRoad === 2) {
      if (
        carModel.current.position.z < -0.1 ||
        carModel.current.position.z > 0.1
      ) {
        if (carModel.current.position.z < 0) {
          carModel.current.position.z += 0.1;
        } else {
          carModel.current.position.z -= 0.1;
        }
      }
    }
    if (positionOnRoad === 3) {
      if (carModel.current.position.z < 1.5) {
        carModel.current.position.z += 0.1;
      }
    }
  });

  materials.Orange.color.r = 1;
  materials.Orange.color.g = 1;
  materials.Orange.color.b = 1;

  return (
    <group ref={carModel} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[155.62, 20.72, -81.96]}
            rotation={[-0.21, Math.PI / 2, 0]}
            scale={2.8}
          >
            <mesh
              geometry={nodes.Spring_Light_black_0.geometry}
              material={nodes.Spring_Light_black_0.material}
            />
            <mesh
              geometry={nodes.Spring_Black_0.geometry}
              material={nodes.Spring_Black_0.material}
            />
          </group>
          <group
            position={[-128.51, 20.72, -81.96]}
            rotation={[-0.21, Math.PI / 2, 0]}
            scale={2.8}
          >
            <mesh
              geometry={nodes.Spring001_Light_black_0.geometry}
              material={nodes.Spring001_Light_black_0.material}
            />
            <mesh
              geometry={nodes.Spring001_Black_0.geometry}
              material={nodes.Spring001_Black_0.material}
            />
          </group>
          <group
            position={[155.62, 20.72, 81.96]}
            rotation={[0.21, -Math.PI / 2, 0]}
            scale={2.8}
          >
            <mesh
              geometry={nodes.Spring002_Light_black_0.geometry}
              material={nodes.Spring002_Light_black_0.material}
            />
            <mesh
              geometry={nodes.Spring002_Black_0.geometry}
              material={nodes.Spring002_Black_0.material}
            />
          </group>
          <group
            position={[-128.51, 20.72, 81.96]}
            rotation={[0.21, -Math.PI / 2, 0]}
            scale={2.8}
          >
            <mesh
              geometry={nodes.Spring003_Light_black_0.geometry}
              material={nodes.Spring003_Light_black_0.material}
            />
            <mesh
              geometry={nodes.Spring003_Black_0.geometry}
              material={nodes.Spring003_Black_0.material}
            />
          </group>
          <group position={[70.41, 165.26, 94.26]} scale={0}>
            <mesh
              geometry={nodes.Smoke001_Smoke_0.geometry}
              material={nodes.Smoke001_Smoke_0.material}
            />
          </group>
          <group position={[74.6, 165.67, 92.36]} scale={0}>
            <mesh
              geometry={nodes.Smoke002_Smoke_0.geometry}
              material={nodes.Smoke002_Smoke_0.material}
            />
          </group>
          <group position={[72.18, 166.53, 95.14]} scale={0}>
            <mesh
              geometry={nodes.Smoke003_Smoke_0.geometry}
              material={nodes.Smoke003_Smoke_0.material}
            />
          </group>
          <group position={[73.14, 165.64, 93.1]} scale={0}>
            <mesh
              geometry={nodes.Smoke004_Smoke_0.geometry}
              material={nodes.Smoke004_Smoke_0.material}
            />
          </group>
          <group position={[75.2, 166.04, 95.17]} scale={0}>
            <mesh
              geometry={nodes.Smoke005_Smoke_0.geometry}
              material={nodes.Smoke005_Smoke_0.material}
            />
          </group>
          <group position={[75.86, 167.36, 89.87]} scale={0}>
            <mesh
              geometry={nodes.Smoke006_Smoke_0.geometry}
              material={nodes.Smoke006_Smoke_0.material}
            />
          </group>
          <group position={[74.99, 167.94, 90.93]} scale={0}>
            <mesh
              geometry={nodes.Smoke007_Smoke_0.geometry}
              material={nodes.Smoke007_Smoke_0.material}
            />
          </group>
          <group position={[73.57, 166.39, 94.53]} scale={0}>
            <mesh
              geometry={nodes.Smoke008_Smoke_0.geometry}
              material={nodes.Smoke008_Smoke_0.material}
            />
          </group>
          <group position={[70.76, 159.59, 95.08]} scale={0}>
            <mesh
              geometry={nodes.Smoke009_Smoke_0.geometry}
              material={nodes.Smoke009_Smoke_0.material}
            />
          </group>
          <group position={[72.88, 163.49, 92.99]} scale={0}>
            <mesh
              geometry={nodes.Smoke010_Smoke_0.geometry}
              material={nodes.Smoke010_Smoke_0.material}
            />
          </group>
          <group position={[75.05, 162.61, 91.64]} scale={0}>
            <mesh
              geometry={nodes.Smoke011_Smoke_0.geometry}
              material={nodes.Smoke011_Smoke_0.material}
            />
          </group>
          <group position={[73.82, 161.82, 89.95]} scale={0}>
            <mesh
              geometry={nodes.Smoke012_Smoke_0.geometry}
              material={nodes.Smoke012_Smoke_0.material}
            />
          </group>
          <group
            name="Frame"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[300, 100, 50]}
          >
            <mesh
              geometry={nodes.Frame_Orange_0.geometry}
              material={materials.Orange}
              // Capot
            />
            <mesh
              geometry={nodes.Frame_Black_0.geometry}
              material={nodes.Frame_Black_0.material}
            />
            <mesh
              geometry={nodes.Frame_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              geometry={nodes.Frame_Light_0.geometry}
              material={materials.Light}
            />
            <mesh
              geometry={nodes.Frame_Light_red_0.geometry}
              material={materials.Light_red}
            />
            <mesh
              geometry={nodes.Frame_Dark_brown_0.geometry}
              material={materials.Dark_brown}
            />
            <mesh
              geometry={nodes.Frame_Dark_brown_handle_0.geometry}
              material={materials.Dark_brown_handle}
            />
            <mesh
              geometry={nodes.Frame_Glass_trailer_0.geometry}
              material={materials.Glass_trailer}
            />
            <mesh
              geometry={nodes.Frame_Light_black_0.geometry}
              material={nodes.Frame_Light_black_0.material}
            />
            <mesh
              geometry={nodes.Frame_Brown_0.geometry}
              material={materials.Brown}
            />
          </group>
          <group
            position={[155.62, 9.27, -127.28]}
            rotation={[0, 0, -1.4]}
            scale={[50.1, 50.1, 27.01]}
            ref={wheel1}
          >
            <mesh
              geometry={nodes.Front_wheel_Black_0.geometry}
              material={nodes.Front_wheel_Black_0.material}
            />
            <mesh
              geometry={nodes.Front_wheel_Light_black_0.geometry}
              material={nodes.Front_wheel_Light_black_0.material}
            />
          </group>
          <group
            position={[-128.51, 14.27, -125.98]}
            rotation={[0, 0, -2.16]}
            scale={[55.11, 55.11, 29.62]}
            ref={wheel2}
          >
            <mesh
              geometry={nodes.Rear_wheel_Black_0.geometry}
              material={nodes.Rear_wheel_Black_0.material}
            />
            <mesh
              geometry={nodes.Rear_wheel_Light_black_0.geometry}
              material={nodes.Rear_wheel_Light_black_0.material}
            />
          </group>
          <group
            position={[155.62, 9.27, 127.28]}
            rotation={[Math.PI, 0, 1.31]}
            scale={[50.1, 50.1, 27.01]}
            ref={wheel3}
          >
            <mesh
              geometry={nodes.Front_wheel001_Black_0.geometry}
              material={nodes.Front_wheel001_Black_0.material}
            />
            <mesh
              geometry={nodes.Front_wheel001_Light_black_0.geometry}
              material={nodes.Front_wheel001_Light_black_0.material}
            />
          </group>
          <group
            position={[-128.51, 14.27, 125.98]}
            rotation={[Math.PI, 0, 2.13]}
            scale={[55.11, 55.11, 29.62]}
            ref={wheel4}
          >
            <mesh
              geometry={nodes.Rear_wheel001_Black_0.geometry}
              material={nodes.Rear_wheel001_Black_0.material}
            />
            <mesh
              geometry={nodes.Rear_wheel001_Light_black_0.geometry}
              material={nodes.Rear_wheel001_Light_black_0.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/car/low-poly_truck_car_drifter.glb");
