import { useGLTF, Clone, Center } from "@react-three/drei"
import { useControls } from "leva"

const Tower = () => {

    const tower = useGLTF("/Island/tower.gltf")

    return(
        <>
            <mesh
                position={[3.2,1.8,-0.9]} scale={0.7}
            >
                <Center>
                    <Clone object={tower.scene}/>
                </Center>
            </mesh>
        </>
    )
}

export default Tower