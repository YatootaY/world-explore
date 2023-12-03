import { useGLTF, Center, Clone } from "@react-three/drei"
import { useControls } from "leva"

const Ships = () => {

    const ship1 = useGLTF("/Island/ship_light.gltf")
    const ship2 = useGLTF("/Island/ship_dark.gltf")
    const ship3 = useGLTF("/Island/ship_wreck.gltf")

    const {position} = useControls({
        position:{
            value: {x:0,z:0},
            step: 0.1
        }
    })

    return(
        <>
            <mesh
                position={[-8.9,2.5,1.2]} scale={0.8}
            >
                <Center>
                    <Clone object={ship1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[7.1,2.5,4.3]} rotation-y={-Math.PI/4} scale={0.8}
            >
                <Center>
                    <Clone object={ship2.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[0.6,1,-1.1]} scale={0.5} rotation-y={Math.PI - 0.3} rotation-z={Math.PI/ 10} rotation-x={0.1}
            >
                <Center>
                    <Clone object={ship3.scene}/>
                </Center>
            </mesh>
            
        </>
    )
}

export default Ships