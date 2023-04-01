import { Grid, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import React from "react";

type Props = {};

const Experience = (props: Props) => {
  const { scale } = useControls({ scale: -2 });
  return (
    <>
      <Perf position={"top-left"} />
      <OrbitControls />
      <Grid cellColor="white" args={[10, 10]} />
      <mesh scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial />
      </mesh>
    </>
  );
};

export default Experience;
