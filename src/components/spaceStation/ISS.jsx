import {React, useRef} from 'react'
// when animating 3d objects, If you have a component that renders a lot of practicals use useMemo to memorize the creation of the practicals ant their position Or a component that render complex 3d models.
import { useMemo } from "react";

// Import three components
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";


const ISS = () => {
    const memoizedISS = useMemo(() => {
        return useGLTF("ISSModel/ISS_stationary.gltf")
    })

    const ISSRef = useRef();
    const xAxis = 1.8;

    useFrame(({ clock }) => {
      // Orbiting Rotation makes the ISS orbit the earth
      ISSRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.2) * xAxis;
      ISSRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.2) * xAxis;
  
      // Axis Rotation
    //   ISSRef.current.rotation.y += 0.002;
    });
  return (
    <mesh ref={ISSRef} position={[xAxis ,1, 0]}>
      <primitive object={memoizedISS.scene} scale={0.003}/>
    </mesh>
  )
}

export default ISS;
