import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, SpotLight } from "@react-three/drei";
import AnimatedStars from "./AnimatedStars";
import Planet1 from "./planet1";
import { DirectionalLight, PointLight } from "three";



const MainContainer = () => {

    return (
       <Canvas>
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
       </Canvas>
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