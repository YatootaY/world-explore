import { useFrame } from "@react-three/fiber"
import "./Overlay.css"
import { useState } from "react"
import { useScroll } from "@react-three/drei"
import { useEffect } from "react"

const Section = (props) => {
    return(
        <div className="section" style={{opacity: props.opacity}}>
            {props.children}
        </div>
    )
}

const Overlay = () => {

    const scroll = useScroll()

    const [sec1Opacity, setSec1Opacity] = useState(0)
    const [sec2Opacity, setSec2Opacity] = useState(0)
    const [sec3Opacity, setSec3Opacity] = useState(0)
    const [sec4Opacity, setSec4Opacity] = useState(0)
    const [sec5Opacity, setSec5Opacity] = useState(0)
    const [sec6Opacity, setSec6Opacity] = useState(0)

    useFrame(() => {
        const r1 = scroll.range(0,1/6)
        const r2 = scroll.curve(1/6,1/6)
        const r3 = scroll.curve(2/6,1/6)
        const r4 = scroll.curve(3/6,1/6)
        const r5 = scroll.curve(4/6,1/6)
        const r6 = scroll.range(5/6,1/6)
        setSec1Opacity(r1)
        setSec2Opacity(r2)
        setSec3Opacity(r3)
        setSec4Opacity(r4)
        setSec5Opacity(r5)
        setSec6Opacity(r6)
    })

    return(
        <div className="overlay">
            <Section opacity={1 - sec1Opacity}>
                <h1>Welcome Traveller</h1>
                <p style={{marginBottom: "20vh"}}>Come and relax on this treasure island</p>
            </Section>
            <Section opacity={sec2Opacity}>
                <h2>Sword of the Rock</h2>
                <p style={{marginBottom: "20vh"}}>A mysterious sword left behind by a mysterious pirate</p>
            </Section>
            <Section opacity={sec3Opacity}>
                <h2>An Island in the middle of nowhere</h2>
                <p style={{marginBottom: "30vh"}}>Away from law and order of the society</p>
            </Section>
            <Section opacity={sec4Opacity}>
                <h2>Enjoy your stay</h2>
                <p style={{marginBottom: "30vh"}}>Living in a castle will give you a premium experience</p>
            </Section>
            <Section opacity={sec5Opacity}>
                <h2>Best Transpotation</h2>
                <p style={{marginBottom: "40vh"}}>Two pirate ships are on standby 24/7 to serve you</p>
            </Section>
            <Section opacity={sec6Opacity}>
                <h1>See you soon!</h1>
                <p style={{marginBottom: "70vh"}}>Come and get the unforgettable experience</p>
            </Section>
        </div>
    )
}

export default Overlay