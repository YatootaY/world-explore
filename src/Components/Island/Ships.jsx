import { useGLTF, Center } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const Ships = () => {

    const ship1 = useGLTF("/Island/ship_light.gltf")
    const ship2 = useGLTF("/Island/ship_dark.gltf")
    const ship3 = useGLTF("/Island/ship_wreck.gltf")
    const boat1 = useGLTF("/Island/boat_large.gltf")
    const boat2 = useGLTF("/Island/boat_small.gltf")

    const ship1Ref = useRef()
    const ship2Ref = useRef()
    const boat2Ref = useRef()

    useFrame((state, delta) => {
        const elapsedTime = state.clock.elapsedTime
        boat2Ref.current.position.y += Math.sin(elapsedTime * 1.5) * 0.001
        ship1Ref.current.rotation.z = Math.sin(elapsedTime) * 0.001
        ship1Ref.current.position.z += Math.sin(elapsedTime * 0.5) * 0.002
        ship1Ref.current.position.y += Math.sin(elapsedTime * 2) * 0.002
        ship2Ref.current.position.y += Math.sin(elapsedTime * 3) * 0.002
    })

    return(
        <>
            <mesh
                position={[-8.9,2.25,1.2]} scale={0.8}
                ref={ship1Ref}
            >
                <Center>
                    <primitive object={ship1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[7.1,2.2,4.3]} rotation-y={-Math.PI/4} scale={0.8} 
                ref={ship2Ref}
            >
                <Center>
                    <primitive object={ship2.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[0.6,1,-1.1]} scale={0.5} rotation-y={Math.PI - 0.3} rotation-z={Math.PI/ 10} rotation-x={0.1}
            >
                <Center>
                    <primitive object={ship3.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-1.8,0.1,-5.3]} scale={0.8} rotation-y={-Math.PI/10} rotation-x={-Math.PI/16}
            >
                <Center>
                    <primitive object={boat1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[1.3,0.05,-9.5]} scale={0.8}
                ref={boat2Ref}
            >
                <Center>
                    <primitive object={boat2.scene}/>
                </Center>
            </mesh>
            
        </>
    )
}

export default Ships