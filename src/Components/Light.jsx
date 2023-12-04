

const Light = () => {

    return(
        <>
            <directionalLight
                position={[10,2,10]}
                color='#eeaf61'
                intensity={2}
            />
            <ambientLight intensity={0.8}/>
        </>
    )
}

export default Light