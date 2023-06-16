import { Sketch } from "./components/sketch";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { useControls } from "leva";
import { SocialsOverlay } from "./components/layout/socials-overlay";

function App() {
  const controls = useControls({ backgroundColor: "#F7F4EA" });

  return (
    <>
      <SocialsOverlay />
      <Canvas camera={{ position: [3, 3, 3] }}>
        <color attach="background" args={[controls.backgroundColor]} />
        <Sketch />
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
