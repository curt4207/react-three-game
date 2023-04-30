import { Sphere } from "@react-three/drei";
import React from 'react'


import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, SpotLight } from "@react-three/drei";
import AnimatedStars from "./AnimatedStars";
import Planet1 from "./planet1";
import { MeshBasicMaterial } from "three";

// args first value is the radius , then horizontal X-axis and vertical Y-axis
const Planet1 = () => {
  return <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
  <sphereGeometry args={[1, 16, 16]} />
  <meshStandardMaterial color="hotpink" transparent />
</mesh>
   
}

export default Planet1;
