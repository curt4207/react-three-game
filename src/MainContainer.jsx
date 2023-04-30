import React from 'react';

import { OrbitControls, Sphere, SpotLight, useHelper } from "@react-three/drei";
import AnimatedStars from "./AnimatedStars";
import Planet1 from "./planet1";
import { DirectionalLight, PointLight } from "three";
import { useRef } from "react";
import * as THREE from "three"


const MainContainer = () => {
const directionalLightRef = useRef();
useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1 , "hotpink")

    return (
       <>
        <color attach="background" args={["black"]}/>
        <OrbitControls />
        <AnimatedStars />
    
        <directionalLight />
        <mesh 
        visible
         userData={{ hello: 'world' }} 
        rotation={[ Math.PI / 2, 0, 0 ]}
        >
  <sphereGeometry args={[1, 34, 34]} />
  <meshStandardMaterial color="hotpink" />
</mesh>
        <Planet1 />
       </>
    );
}

export default MainContainer;


/////// NOTE: Using Canvas you don`t have to use 
// import * as THREE from 'three';
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement ); 