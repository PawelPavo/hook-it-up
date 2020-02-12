
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const UserDetail = (props) => {

    const [UserInfo, setUserInfo] = useState([])
    const [address, setAddress] = useState({});


    const getUserInfo = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
        let info = await res.json()
        setUserInfo(info)
        setAddress(info.address);
    }

    useEffect(() => {
        getUserInfo()
    },[]);

    return (
        <>
            <section className="container">
                <div className="row justify-content-center mt-5 text-success">
                </div>
                <div className="card text-center">
                    <div className="card-header shadow">
                        <h3>{UserInfo.name}</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Nickname: {UserInfo.username}</h5>
                        <p className="card-text">Email: {UserInfo.email}</p>
                        <p className="card-text">Website: {UserInfo.website}</p>
                        <h4 className="card-text">Address: </h4>
                        <p>{address.street} {address.suite}</p>
                        <p>{address.city}, {address.zipcode}</p>
                        <Link to="/Users"><button className="btn btn-outline-warning mr-3 shadow" type="button">View Other Users</button></Link>
                    </div>
                    <div className="card-footer text-muted shadow" >{UserInfo.website}</div>
                </div>
            </section>
        </>
    );
}


export default UserDetail;