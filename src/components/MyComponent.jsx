import React, {useState} from 'react'
const MyComponent = (props)=> {
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0)
    const [isEmployedStatus, setIsEmployedStatus] = useState(true);

    const updateName = () => {
        setName('Farhad Hossain')
    }
    const IncrementAge = () => {
        setAge(pv => pv + 1);
        setAge(pv => pv + 1);
    }
    const toggleEmployedStatus = ()=> {
        setIsEmployedStatus(!isEmployedStatus );
    }


    return (
        <>
            <p>name: {name}</p>
            <button onClick={()=> updateName()}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={()=> IncrementAge()}>IcrementAge</button>

            <p>Is Employed: {isEmployedStatus ? 'Yes' : 'No'}</p>
            <button onClick={() => toggleEmployedStatus()}>Change Employed Status</button>
        </>
    )
} 
export default MyComponent;