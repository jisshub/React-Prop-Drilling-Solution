import { useState } from "react"

const Parent = () =>{ 
    const [fName, setfName] = useState('jissmon')
    const [lName, setlName] = useState('jose')

    return (
        <>
            <h1>This is a parent component</h1>
            <ChildA fName={fName} lName={lName} />
        </>
    )
}

const ChildA = ({fName, lName}) => {
    return (
        <>
            <h2>This is a Child component A</h2>
            <ChildB fName={fName} lName={lName} />
        </>
    )
}

const ChildB = ({fName, lName}) => {
    return (
        <>
            <h3>This is Child component B</h3>
            <ChildC fName={fName} lName={lName} />
        </>
    )
}

const ChildC = ({fName, lName}) => {
    return (
        <>
            <h4>Data from parent component is below shown</h4>
            <div>
                <h5>Full Name: {fName} {lName}</h5>
            </div>
        </>
    )
}

export default Parent
