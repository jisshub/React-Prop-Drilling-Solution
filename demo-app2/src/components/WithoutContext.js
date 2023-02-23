import { useState } from "react"

const FootballTeams = () => {
    const [playerName, setplayerName] = useState('Karim Benzema')
    const [position, setPosition] = useState('striker')

    return (
        <>
            <h1>Football Teams</h1>
            <Barcelona playerName={playerName} position={position}/>
        </>
    )
}

const Barcelona = ({playerName, position}) => {
    return (
        <>
            <h2>This is Barcelona</h2>
            <Chelsea playerName={playerName} position={position}/>
        </>
    )
}

const Chelsea = ({playerName, position})=>{
    return (
        <>
            <h2>This is Chelsea</h2>
            <RealMadrid playerName={playerName} position={position} />
        </>
    )
}

const RealMadrid = ({playerName, position})=>{
    return (
        <>
            <h2>This is Real Madrid</h2>
            <div>
                <h3>{playerName} is a RealMadrid player who play as a {position}</h3>
            </div>
        </>
    )
}

export default FootballTeams;
