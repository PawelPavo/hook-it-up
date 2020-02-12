import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const Users = () => {

    const [users, setUsers] = useState([])
    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await res.json()
        setUsers(users)
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {users.map(user => (
                                <Link to={`UserDetail/${user.id}`}> <li key={user.id} className="list-group-item">{user.name}</li></Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users;