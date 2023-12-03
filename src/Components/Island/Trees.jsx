import { useGLTF, Center, Clone } from "@react-three/drei"
import { useControls } from "leva"

const Trees = () => {

    const palm1 = useGLTF("/Island/palm_detailed_long.gltf")
    const palm2 = useGLTF("/Island/palm_detailed_short.gltf")
    const palm3 = useGLTF("/Island/palm_long.gltf")
    const palm4 = useGLTF("/Island/palm_short.gltf")

    const {position} = useControls({
        position: {
            value: {x:0, z:0},
            step: 0.1
        }
    })

    return(
        <>
            <mesh
                position={[-2.7,1.25,-3.4]}
            >
                <Center>
                    <Clone object={palm1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[3.3,1.3,0.3]}
            >
                <Center>
                    <Clone object={palm2.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-6.1,1,0.9]}
            >
                <Center>
                    <Clone object={palm4.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-1.1,1.2,4.7]}
            >
                <Center>
                    <Clone object={palm3.scene}/>
                </Center>
            </mesh>
        </>
    )
}

export default Trees