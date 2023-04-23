import { useState } from "react";
import "./App.css";
import Experience from "./components/experience";
import { Canvas } from "@react-three/fiber";
import Overlay from "./components/overlay";
import { Loader } from "@react-three/drei";
import { useControls } from "leva";

function App() {
  const controls = useControls({ backgroundColor: "#F7F4EA" });

  return (
    <>
      <Overlay />
      <Canvas camera={{ position: [3, 3, 3] }}>
        <color attach="background" args={[controls.backgroundColor]} />
        <Experience />
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
