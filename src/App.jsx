import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Experience from "./Experience"

const App = () => {

  return(
    <>
      <Canvas>
        <OrbitControls/>
        <Experience/>
      </Canvas>
    </>
  )
}

export default App