import { useGLTF, Center } from "@react-three/drei"

const Tower = () => {

    const tower = useGLTF("/Island/tower.gltf")

    return(
        <>
            <mesh
                position={[3.2,1.8,-0.9]} scale={0.7}
            >
                <Center>
                    <primitive object={tower.scene}/>
                </Center>
            </mesh>
        </>
    )
}

export default Tower