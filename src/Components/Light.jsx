

const Light = () => {

    return(
        <>
            <directionalLight
                position={[4,4,1]}
                color='#eeaf61'
                intensity={1}
            />
            <ambientLight intensity={0.8}/>
        </>
    )
}

export default Light