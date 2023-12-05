import { useScroll, OrbitControls } from "@react-three/drei"
import Island from "./Components/Island"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import * as THREE from "three"

const Experience = () => {

    const scroll = useScroll()
    const cameraPosition1 = {x: -11.8, y:5, z:-12.68}
    const cameraTarget1 = {x: 0, y: 0, z:0}
    const cameraPosition2 = {x: -1.4, y:5, z:-1.5}
    const cameraTarget2 = {x: -5.4, y: 2.7, z:2.25}
    const cameraPosition3 = {x: 9, y:15, z:-7.5}
    const cameraTarget3 = {x: -5.4, y: 2.7, z:2.25}
    const cameraPosition4 = {x: 9, y:3, z:-7.5}
    const cameraTarget4 = {x: 3.2, y: 1.8, z: -0.9}
    const cameraPosition5 = {x: 10, y:3, z:10}
    const cameraTarget5 = {x: 3.2, y: 1.8, z: -0.9}
    const cameraPosition6 = {x: 0, y:3, z:10}
    const cameraTarget6 = {x: 3.2, y: 1.8, z: -0.9}
    const [smoothedCameraPosition] = useState(() => new THREE.Vector3(10.65,5.55,-12))
    const [smoothedCameraTarget] = useState(() => new THREE.Vector3(0,0,0))

    useFrame((state, delta) => {
        const r1 = scroll.offset
        console.log(r1)
        if (r1 < 0.16){
            smoothedCameraTarget.lerp(cameraTarget1, delta)
            smoothedCameraPosition.lerp(cameraPosition1, delta * 0.8)
        }else if (r1 < 0.16 * 2){
            smoothedCameraTarget.lerp(cameraTarget2, delta)
            smoothedCameraPosition.lerp(cameraPosition2, delta)
        }else if (r1 < 0.16 * 3){
            smoothedCameraTarget.lerp(cameraTarget3, delta)
            smoothedCameraPosition.lerp(cameraPosition3, delta)
        }else if (r1 < 0.16 * 4){
            smoothedCameraTarget.lerp(cameraTarget4, delta)
            smoothedCameraPosition.lerp(cameraPosition4, delta)
        }else if (r1 < 0.16 * 5){
            smoothedCameraTarget.lerp(cameraTarget5, delta)
            smoothedCameraPosition.lerp(cameraPosition5, delta)
        }else{
            smoothedCameraTarget.lerp(cameraTarget6, delta)
            smoothedCameraPosition.lerp(cameraPosition6, delta)
        }
        
        state.camera.position.copy(smoothedCameraPosition)
        state.camera.lookAt(smoothedCameraTarget)
        
    })

    return(
        <>
            {/* <OrbitControls/> */}
            <Island/>
        </>
    )
}

export default Experience