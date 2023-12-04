import { useGLTF, Center, Clone } from "@react-three/drei"
import { useControls } from "leva"

const Ships = () => {

    const ship1 = useGLTF("/Island/ship_light.gltf")
    const ship2 = useGLTF("/Island/ship_dark.gltf")
    const ship3 = useGLTF("/Island/ship_wreck.gltf")
    const boat1 = useGLTF("/Island/boat_large.gltf")
    const boat2 = useGLTF("/Island/boat_small.gltf")

    const {position} = useControls({
        position:{
            value: {x:-1.8,z:-4.7},
            step: 0.1
        }
    })

    return(
        <>
            <mesh
                position={[-8.9,2.2,1.2]} scale={0.8} rotation-z={Math.PI/25}
            >
                <Center>
                    <Clone object={ship1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[7.1,2.2,4.3]} rotation-y={-Math.PI/4} scale={0.8} rotation-z={-Math.PI/25}
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

            <mesh
                position={[-1.8,0.1,-5.3]} scale={0.8} rotation-y={-Math.PI/10} rotation-x={-Math.PI/16}
            >
                <Center>
                    <Clone object={boat1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[1.3,0.1,-9.5]} scale={0.8}
            >
                <Center>
                    <Clone object={boat2.scene}/>
                </Center>
            </mesh>
            
        </>
    )
}

export default Ships