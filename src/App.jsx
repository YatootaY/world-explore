import { Canvas } from "@react-three/fiber"
import { Sky, ScrollControls, Scroll, Loader } from "@react-three/drei"
import Experience from "./Experience"
import Light from "./Components/Light"
import Overlay from "./Components/Overlay"
import { Suspense } from 'react'

const App = () => {

  return(
    <>
      <Canvas>
        <Light/>
        <Suspense fallback={null}>
          <Sky
            sunPosition={[10,0.1,10]}
            mieCoefficient={0.001}
            mieDirectionalG={10}
            rayleigh={4}
          />
          <ScrollControls pages={6} damping={0.2}>
              <Experience/>
            <Scroll html>
              <Overlay/>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader/>
    </>
  )
}

export default App