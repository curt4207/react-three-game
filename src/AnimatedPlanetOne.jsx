import { Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const AnimatedPlanetOne = () => {
  const starsRef = useRef();
  const [earthTexture] = useTexture(["/8k_earth_dayMap.jpg"])

  useFrame(() => {
    // starsRef.current.rotation.x += 0.0002;
    // starsRef.current.rotation.y += 0.0002;
    // starsRef.current.rotation.z += 0.0002;
  });
  return   <mesh visible userData={{ hello: "world" }}>
  {/* <AnimatedPlanetOne/> */}
  {/* <hello /> */}
</mesh>
};

export default AnimatedPlanetOne;
