import React from "react";
import { Robot } from "./Robot";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const RobotCanvas = () => {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls enableZoom={false} />
      <Robot position={[1.35, -0.5, 1.25]} scale={1} />
    </Canvas>
  );
};

export default RobotCanvas;
