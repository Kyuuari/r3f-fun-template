import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import Overlay, { OverlayDark, OverlayLight } from "./components/Overlay";

function App() {
  return (
    <>
      <Overlay />
      <Canvas camera={{ position: [3, 3, 3] }}>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
