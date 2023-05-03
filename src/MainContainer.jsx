import React from "react";

import AnimatedStars from "./components/AnimatedStars";

import { useRef } from "react";

// Imported three
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

// Imported Components
import Earth from "./components/planets/Earth";
import Sun from "./components/planets/Sun";

const MainContainer = () => {

 

  return (
    <>

      <color attach="background" args={["black"]} />

      <AnimatedStars />

     
      {/* NOTE: Planet */}
      <Sun />
      
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
