import { useGLTF, Center } from "@react-three/drei"

const Trees = () => {

    const palm1 = useGLTF("/Island/palm_detailed_long.gltf")
    const palm2 = useGLTF("/Island/palm_detailed_short.gltf")
    const palm3 = useGLTF("/Island/palm_long.gltf")
    const palm4 = useGLTF("/Island/palm_short.gltf")

    return(
        <>
            <mesh
                position={[-2.7,1.25,-3.4]}
            >
                <Center>
                    <primitive object={palm1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[5.2,1,-1.9]} rotation-y={-Math.PI/4}
            >
                <Center>
                    <primitive object={palm2.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-6.1,1,0.9]}
            >
                <Center>
                    <primitive object={palm4.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-1.1,1.2,4.7]}
            >
                <Center>
                    <primitive object={palm3.scene}/>
                </Center>
            </mesh>
        </>
    )
}

export default Trees