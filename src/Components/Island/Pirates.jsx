import { useGLTF, Center } from "@react-three/drei"

const Pirates = () => {

    const captain = useGLTF("/Island/pirate_captain.gltf")
    const officer = useGLTF("/Island/pirate_officer.gltf")
    const crew = useGLTF("/Island/pirate_crew.gltf")

    return(
        <>
            <mesh
                position={[-2.4,0.75,-4.1]}
            >
                <Center>
                    <primitive object={captain.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-0.8,0.78,1.1]}
                rotation-y={4}
            >
                <Center>
                    <primitive object={officer.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-0.9,0.78,2.8]}
            >
                <Center>
                    <primitive object={crew.scene}/>
                </Center>
            </mesh>
        </>
    )
}

export default Pirates