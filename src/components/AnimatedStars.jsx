import { Stars } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"


const AnimatedStars = () => {
    const starsRef = useRef()
   


    useFrame(()=> {
        starsRef.current.rotation.x += 0.0002;
        starsRef.current.rotation.y += 0.0002;
        starsRef.current.rotation.z += 0.0002;
   
    })
  return <Stars ref={starsRef} fade speed={0.5} radius={100} depth={0}/>
}

export default AnimatedStars;