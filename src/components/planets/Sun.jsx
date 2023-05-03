import { React, useRef } from "react";

// Imported Components
import Moon from "./Moon";
import ISS from "../spaceStation/ISS";
import Earth from "./Earth";

// Imported three
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";


const Sun = () => {
  const [
    sunTexture
  ] = useTexture([
    "/8k_sun.jpg",
  ]);

  const sunRef = useRef();
  const pointLightRef = useRef();
  const directionalLightRefTwo = useRef();
 

  useFrame(() => {
    sunRef.current.rotation.y += 0.002;
  });
  useHelper(pointLightRef, THREE.PointLightHelper, 1, "yellow");
//   useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, "green");

  return (
    <group>
     {/* NOTE: Lighting position x, y, z */}
     
      <mesh
        // castShadow
        visible
        ref={sunRef}
        position={[0, 0, 0]}
      >
      
        <sphereGeometry args={[4.5, 45, 45]} />
        <meshPhongMaterial
          map={sunTexture}
          emissiveMap={sunTexture}
          emissiveIntensity={1}
          emissive={0xFDFEFE}
        />
    <Earth  displacementScale={0.21}/>
        <pointLight
        ref={pointLightRef}
        position={[0, 0, 0]}
        intensity={1}
        castShadow
      />
      </mesh>

    </group>
  );
};

export default Sun;
