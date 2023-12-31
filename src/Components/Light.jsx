

const Light = () => {

    return(
        <>
            <directionalLight
                position={[10,4,10]}
                color='#eeaf61'
                intensity={1}
            />
            <ambientLight intensity={0.4}/>
        </>
    )
}

export default Light