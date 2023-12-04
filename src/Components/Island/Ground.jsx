import { useControls } from "leva"

const Ground = () => {

    const {groundColor} = useControls({
        groundColor: "#4e6ba4"
    })

    return(
        <>
            <group>
                <mesh scale={[1.6,2,1.6]} position={[3.33, 0.3, -0.89]}>
                    <cylinderGeometry args={[1,1.2,0.2,6]}/>
                    <meshStandardMaterial color={"#4eaa70"} attach="material-1"/>
                    <meshStandardMaterial color={"#d9d8be"} attach="material-0"/>
                </mesh>
                <mesh scale={[1.4,1,1.4]} position={[-2.6, 0.1, -3.45]}>
                    <cylinderGeometry args={[1,1.3,0.2,6]}/>
                    <meshStandardMaterial color={"#4eaa70"} attach="material-1"/>
                    <meshStandardMaterial color={"#d9d8be"} attach="material-0"/>
                </mesh>
                <mesh scale={[2,1,2]} position={[-5.12, 0.1, 2.04]}>
                    <cylinderGeometry args={[1,1.3,0.2,6]}/>
                    <meshStandardMaterial color={"#4eaa70"} attach="material-1"/>
                    <meshStandardMaterial color={"#d9d8be"} attach="material-0"/>
                </mesh>
                <mesh scale={[2.5,1,2.5]} position={[3.37, 0.1, -0.9]}>
                    <cylinderGeometry args={[1,1.3,0.2,6]}/>
                    <meshStandardMaterial color={"#4eaa70"} attach="material-1"/>
                    <meshStandardMaterial color={"#d9d8be"} attach="material-0"/>
                </mesh>
                <mesh scale={[2,1,2]} position={[-1.7, 0.1, 2]}>
                    <cylinderGeometry args={[1,1.3,0.2,6]}/>
                    <meshStandardMaterial color={"#4eaa70"} attach="material-1"/>
                    <meshStandardMaterial color={"#d9d8be"} attach="material-0"/>
                </mesh>
                <mesh scale={[2,1,2]} position={[1.7, 0.1, 2]}>
                    <cylinderGeometry args={[1,1.3,0.2,6]}/>
                    <meshStandardMaterial color={"#4eaa70"} attach="material-1"/>
                    <meshStandardMaterial color={"#d9d8be"} attach="material-0"/>
                </mesh>
                <mesh position-y={0.1} scale={[2,1,2]} position-z={5}>
                    <cylinderGeometry args={[1,1.3,0.2,6]}/>
                    <meshStandardMaterial color={"#4eaa70"} attach="material-1"/>
                    <meshStandardMaterial color={"#d9d8be"} attach="material-0"/>
                </mesh>
            </group>
            <group scale={14}>
                <mesh rotation-x={-Math.PI/2}>
                    <circleGeometry args={[1]}/>
                    <meshStandardMaterial color={groundColor}/>
                </mesh>
                <mesh rotation-z={Math.PI}>
                    <sphereGeometry args={[1,32,16,0,Math.PI*2,0,Math.PI/2]}/>
                    <meshStandardMaterial color={groundColor}/>
                </mesh>
            </group>
        </>
    )
}

export default Ground