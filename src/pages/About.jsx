import React, {useState, useEffect} from 'react'

const About = ()=> {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
    const allUsers = users.map((user, index) =>
        <li key={user.id}>{user.name}</li>
    )
    console.log(allUsers)
    return (
        <>
        <h1>User's List</h1>
        <ul>
            {allUsers}
        </ul>
        </>
    );
}
export default About;