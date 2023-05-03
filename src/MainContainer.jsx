import React from "react";

import { OrbitControls,
  //  Sphere,
    // SpotLight,
     useHelper
     } from "@react-three/drei";
import AnimatedStars from "./AnimatedStars";


import { useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const MainContainer = () => {
    const directionalLightRef = useRef();
    const directionalLightRefTwo = useRef();
    const [earthTexture, planetNightMap] = useTexture(["/8k_earth_dayMap.jpg","/8k_earth_dayMap.jpg"])
   

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "yellow");
  useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, "green");

  return (
    <>
      <color attach="background" args={["black"]} />
      <OrbitControls />
      <AnimatedStars />

      {/* NOTE: Lighting position x,y,z */}
      <directionalLight
        ref={directionalLightRef}
        position={[0, 0, 10]}
        intensity={1}
      />
      <directionalLight
        ref={directionalLightRefTwo}
        position={[0, 0, -10]}
        intensity={0.5}
      />

      {/* NOTE: Planet */}
      <mesh
        visible
        userData={{ hello: "world" }} 
      >
        <sphereGeometry args={[1, 34, 34]} />
        <meshStandardMaterial  map={earthTexture} normalMap={planetNightMap} />
      </mesh>
      
    </>
  );
};

export default MainContainer;

/////// NOTE: Using Canvas you don`t have to use
// import * as THREE from 'three';
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
