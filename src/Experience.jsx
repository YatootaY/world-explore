import Light from "./Components/Light"

const Experience = () => {

    return(
        <>
            <Light/>
            <mesh scale={[1,1,1]} position-y={0.5}>
                <boxGeometry/>
                <meshStandardMaterial/>
            </mesh>
            <mesh scale={[5,0.2,5]} position-y={-0.1}>
                <boxGeometry/>
                <meshStandardMaterial color={"brown"}/>
            </mesh>
        </>
    )
}

export default Experience