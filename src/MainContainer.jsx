import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

const MainContainer = () => {
    return (
       <Canvas>
        <color attach="background" args={["black"]}/>
        <OrbitControls />
        <Stars />
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