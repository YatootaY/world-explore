import { Canvas } from "@react-three/fiber"
import { Sky, ScrollControls } from "@react-three/drei"
import Experience from "./Experience"
import Light from "./Components/Light"

const App = () => {

  return(
    <>
      <Canvas>
        <Light/>
        <Sky
          sunPosition={[10,0.1,10]}
          mieCoefficient={0.001}
          mieDirectionalG={10}
          rayleigh={4}
        />
        <ScrollControls pages={6} damping={0}>
          <Experience/>
        </ScrollControls>
        
      </Canvas>
    </>
  )
}

export default App