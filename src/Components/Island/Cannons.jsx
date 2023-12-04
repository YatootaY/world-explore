import { useGLTF, Center, Clone } from "@react-three/drei"
import { useControls } from "leva"


const Cannons = () => {

    const cannon1 = useGLTF("/Island/cannon.gltf")
    const cannon2 = useGLTF("/Island/cannonLarge.gltf")
    const cannon3 = useGLTF("/Island/cannonMobile.gltf")
    const cannonBall = useGLTF("/Island/cannonBall.gltf")

    const {position, rotation} = useControls({
        position: {
            value: {x: 0, z: 0},
            step: 0.1
        },
        rotation: {
            value: 0,
            step: 0.1
        }
    })

    return(
        <>
            <mesh
                position={[-2.5,0.4,3.5]} rotation-y={2.6}
            >
                <Center>
                    <primitive object={cannon1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[0.1,0.45,6.5]} rotation-y={3.7}
            >
                <Center>
                    <primitive object={cannon2.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[3,0.5,2.5]} rotation-y={4.8}
            >
                <Center>
                    <primitive object={cannon3.scene}/>
                </Center>
            </mesh>

            <group position={[-2.1, 0.3, 3.3]} scale={1.5}>
                <mesh
                    position-x={0.15}
                >
                    <Center>
                        <Clone object={cannonBall.scene}/>
                    </Center>
                </mesh>
                <mesh
                >
                    <Center>
                        <Clone object={cannonBall.scene}/>
                    </Center>
                </mesh>
                <mesh
                    position-z={0.15}
                    position-x={0.08}
                >
                    <Center>
                        <Clone object={cannonBall.scene}/>
                    </Center>
                </mesh>
            </group>

            <group position={[0, 0.3, 5.8]} rotation-y={3} scale={1.5}>
                <mesh
                    position-x={0.15}
                >
                    <Center>
                        <Clone object={cannonBall.scene}/>
                    </Center>
                </mesh>
                <mesh
                >
                    <Center>
                        <Clone object={cannonBall.scene}/>
                    </Center>
                </mesh>
            </group>
        </>
    )
}

export default Cannons