import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Stars, Sky } from "@react-three/drei"
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
        <Sky
          sunPosition={[10,0.2,10]}
          mieCoefficient={0.001}
          mieDirectionalG={10}
          rayleigh={4}
        />
        <Experience/>
        
      </Canvas>
    </>
  )
}

export default App