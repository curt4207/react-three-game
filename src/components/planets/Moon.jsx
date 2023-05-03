import { React, useRef } from "react";

// Imported Components

// Imported three
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Moon = () => {
  const [moonTexture] = useTexture(["/8k_moon.jpg"]);

  const moonRef = useRef();
  const xAxis = 4;

  useFrame(({ clock }) => {
    // Orbiting Rotation makes the moon orbit the earth
    moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.2) * xAxis;
    moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.2) * xAxis;

    // Axis Rotation
    moonRef.current.rotation.y += 0.002;
  });

  return (
    <mesh castShadow receiveShadow visible ref={moonRef} position={[xAxis, 0.2, 0]}>
      {/*args = Radius, X-axis, Y-axis */}
      <sphereGeometry args={[0.5, 45, 35]} />
      <meshPhongMaterial map={moonTexture} />
    </mesh>
  );
};

export default Moon;
