import React, { useState, useContext } from "react"

let context = React.createContext(null)
const ParentContext = () => {
    
    const [fName, setfName] = useState('jissmon')
    const [lName, setlName] = useState('jose')

    return (
        <context.Provider value={{fName, lName}}>
            <>
                <h1>This is a parent component</h1>
            </>
            <ChildA />
        </context.Provider>
    )
}

const ChildA = () =>{
    return (    
        <>
            <h1>This is a ChildA component</h1>
            <ChildB />
        </>
    )
}

const ChildB = () =>{
    return (    
        <>
            <h1>This is a ChildB component</h1>
            <ChildC />
        </>
    )
}

const ChildC = () =>{
    const {fName, lName} = useContext(context)
    return (    
        <>
            <h1>This is a ChildC component</h1>
            <h2>
                Data from parent component is below
            </h2>
            <h3>FullName: {fName} {lName}</h3>
        </>
    )
}


export default ParentContext;
