

const Light = () => {

    return(
        <>
            <directionalLight
                position={[4,4,1]}
            />
            <ambientLight intensity={0.5}/>
        </>
    )
}

export default Light