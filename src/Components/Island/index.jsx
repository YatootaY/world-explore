import Ground from "./Ground"
import Trees from "./Trees"
import Ships from "./Ships"
import Rocks from "./Rocks"
import Tower from "./Tower"

const Island = () => {

    return(
        <>
            <Tower/>
            <Rocks/>
            <Ships/>
            <Trees/>
            <Ground/>
        </>
    )
}

export default Island