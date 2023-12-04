import { useGLTF, Center } from "@react-three/drei"

const Items = () => {

    const bottle1 = useGLTF("/Island/bottle.gltf")
    const bottle2 = useGLTF("/Island/bottleLarge.gltf")
    const chest = useGLTF("/Island/chest.gltf")
    const hole = useGLTF("/Island/hole.gltf")
    const paddle = useGLTF("/Island/paddle.gltf")
    const shovel = useGLTF("/Island/shovel.gltf")
    const sword1 = useGLTF("/Island/sword_scimitar.gltf")
    const sword2 = useGLTF("/Island/sword.gltf")

    return(
        <>
            <mesh
                position={[-5.4,2.7,2.25]} rotation-x={Math.PI}
            >
                <Center>
                    <primitive object={sword2.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-2.9,0.32,-4.6]} scale={0.7} rotation-x={Math.PI}
            >
                <Center>
                    <primitive object={sword1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-1.8,0.2,-3.9]} rotation-y={rotation}
            >
                <Center>
                    <primitive object={paddle.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[0.1,0.4,3.1]} rotation-y={Math.PI/2}
            >
                <Center>
                    <primitive object={chest.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-0.9,0.25,2.1]}
            >
                <Center>
                    <primitive object={hole.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[0,0.55,2.4]} rotation-x={-Math.PI/2}
            >
                <Center>
                    <primitive object={shovel.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-0.5,0.32,1.4]} scale={0.5}
            >
                <Center>
                    <primitive object={bottle1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[position.x,0.25,position.z]} scale={0.5} rotation-x={Math.PI/2}
            >
                <Center>
                    <primitive object={bottle2.scene}/>
                </Center>
            </mesh>
        </>
    )
}

export default Items