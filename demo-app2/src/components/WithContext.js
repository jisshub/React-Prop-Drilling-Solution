import React from "react"
import { useContext, useState } from "react";


let context = React.createContext(null)
const FootballTeamsContext = () => {
    const [playerName, setplayerName] = useState('Karim Benzema')
    const [position, setPosition] = useState('striker')

    return (
        <context.Provider value={{playerName, position}}>
            <h1>Football Teams context</h1>
            <Barcelona />
        </context.Provider>
    )
}

const Barcelona = () => {
    return (
        <>
            <h2>This is Barcelona</h2>
            <Chelsea />
        </>
    )
}

const Chelsea = ()=>{
    return (
        <>
            <h2>This is Chelsea</h2>
            <RealMadrid  />
        </>
    )
}

const RealMadrid = ()=>{
    // destructure the state variables from context object.
    const {playerName, position} = useContext(context)
    return (
        <>
            <h2>This is Real Madrid</h2>
            <div>
                <h3>{playerName} is a RealMadrid player who play as a {position}</h3>
            </div>
        </>
    )
}

export default FootballTeamsContext;
