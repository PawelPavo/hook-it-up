import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>

            <nav class="navbar navbar-dark bg-dark my-5 text-center">
                <form className="form-inline">
                <Link to="/"><button className="btn btn-outline-success mr-3" type="button">Home</button></Link>
                <Link to="/Users"><button className="btn btn-outline-success mr-3" type="button">Users</button></Link>
                </form>
            </nav>

        </>
    )
}


export default NavBar