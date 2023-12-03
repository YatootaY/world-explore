import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Experience from "./Experience"

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
        <Experience/>
      </Canvas>
    </>
  )
}

export default App