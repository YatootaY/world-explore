import { Canvas } from "@react-three/fiber"
import { Sky, ScrollControls, Scroll } from "@react-three/drei"
import Experience from "./Experience"
import Light from "./Components/Light"
import Overlay from "./Components/Overlay"

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
          <Scroll html>
            <Overlay/>
          </Scroll>
        </ScrollControls>
        
      </Canvas>
    </>
  )
}

export default App