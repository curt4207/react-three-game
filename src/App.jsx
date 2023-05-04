import MainContainer from "./MainContainer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas
    style={{margin:"10px",maxWidth: "1800px", maxHeight: "800px"}}
      shadows
      camera={{
        fov: 85,
        near: 1,
        far: 1000,
        position: [0, 5, 13],
      }}
    >
      <OrbitControls />
      <MainContainer />
    </Canvas>
  );
}

export default App;
1;
