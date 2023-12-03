import { useGLTF, Clone, Center } from "@react-three/drei"
import { useControls } from "leva"

const Rocks = () => {
    
    const rock1 = useGLTF("/Island/formation_rock.gltf")
    const rock2 = useGLTF("/Island/formation_stone.gltf")
    const rock3 = useGLTF("/Island/formationLarge_rock.gltf")
    const rock4 = useGLTF("/Island/formationLarge_stone.gltf")

    const {position} = useControls({
        position:{
            value: {x:0,z:0},
            step: 0.1
        }
    })

    return(
        <>
            <mesh
                position={[-5.2,1.3,2.4]} scale={2}
            >
                <Center>
                    <Clone object={rock1.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[8.9,0.6,-4.2]} scale={1.8} rotation-y={Math.PI/2}
            >
                <Center>
                    <Clone object={rock2.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[-3.4,0.5,-3.9]} scale={0.5} rotation-y={Math.PI}
            >
                <Center>
                    <Clone object={rock3.scene}/>
                </Center>
            </mesh>

            <mesh
                position={[2.2,1.3,-3.4]} scale={2}
            >
                <Center>
                    <Clone object={rock4.scene}/>
                </Center>
            </mesh>
        </>
    )
}

export default Rocks