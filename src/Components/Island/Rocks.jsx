import { useGLTF, Center } from "@react-three/drei"

const Rocks = () => {
    
    const rock1 = useGLTF("/Island/formation_rock.gltf")
    const rock2 = useGLTF("/Island/formation_stone.gltf")
    const rock3 = useGLTF("/Island/formationLarge_rock.gltf")
    const rock4 = useGLTF("/Island/formationLarge_stone.gltf")

    return(
        <>
            <mesh
                position={[-5.2,1.3,2.4]} scale={2}
            >
                <Center>
                    <primitive object={rock1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[8.9,0.6,-4.2]} scale={1.8} rotation-y={Math.PI/2}
            >
                <Center>
                    <primitive object={rock2.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-3.4,0.5,-3.9]} scale={0.5} rotation-y={Math.PI}
            >
                <Center>
                    <primitive object={rock3.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[2.2,1.3,-3.4]} scale={2}
            >
                <Center>
                    <primitive object={rock4.scene}/>
                </Center>
            </mesh>
        </>
    )
}

export default Rocks