import { React, useRef } from "react";

// Imported Components
import Moon from "./Moon";
import ISS from "../spaceStation/ISS";

// Imported three
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Earth = ({ displacementScale }) => {
  const [
    earthTexture,
    planetNormalMap,
    earthSpecularMap,
    earthDisplacementMap,
  ] = useTexture([
    "/8k_earth_dayMap.jpg",
    "/8k_earth_normal_map.jpg",
    "/8k_earth_specular_map.jpg",
    "/earth-displacement.jpg",
  ]);

  const earthRef = useRef();

  useFrame(() => {
    
    earthRef.current.rotation.y += 0.002;
  });

  return (
    <group position={[20, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        visible
        ref={earthRef}
        userData={{ hello: "world" }}
      >
        <sphereGeometry args={[1, 45, 35]} />
        <meshPhongMaterial
          map={earthTexture}
          normalMap={planetNormalMap}
          specularMap={earthSpecularMap}
          shininess={1000}
          displacementMap={earthDisplacementMap}
          displacementScale={displacementScale}
        />
      </mesh>
      <ISS />
      <Moon />
    </group>
  );
};

export default Earth;
