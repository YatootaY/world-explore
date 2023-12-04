import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Stage } from "@react-three/drei"
import Experience from "./Experience"
import Light from "./Components/Light"
import { useControls } from "leva"

const App = () => {

  return(
    <>
      <Canvas
        camera={ {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ 2.5, 4, 6 ]
      } }
      >
        <OrbitControls/>
        <Light/>
        <Environment
          background
        >
          <color args={["#4e6ba4"]} attach="background"/>
        </Environment>
        <Experience/>
        
      </Canvas>
    </>
  )
}

export default App