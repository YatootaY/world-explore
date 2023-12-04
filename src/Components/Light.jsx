

const Light = () => {

    return(
        <>
            <directionalLight
                position={[10,4,10]}
                color='#eeaf61'
                intensity={2}
            />
            <ambientLight intensity={0.8}/>
        </>
    )
}

export default Light