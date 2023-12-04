import Ground from "./Ground"
import Trees from "./Trees"
import Ships from "./Ships"
import Rocks from "./Rocks"
import Tower from "./Tower"
import Cannons from "./Cannons"
import Items from "./Items"

const Island = () => {

    return(
        <>
            <Items/>
            <Cannons/>
            <Tower/>
            <Rocks/>
            <Ships/>
            <Trees/>
            <Ground/>
        </>
    )
}

export default Island