import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
    let userdata = JSON.parse(localStorage.getItem("userdata"))
    useEffect(() => {
        if (!userdata) {
            navigate("/")
        }
    }, [navigate, userdata])
    const handleLogout = () => {
        localStorage.removeItem("userdata");
        navigate("/")
    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center bg-primary' style={{height:"100vh"}}>
                <div className="card text-center w-50">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="true" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">SignUp</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Welcome Dear {userdata.user.name}</h5>
                        <p className="card-text">This is a complete registration app developed using MERN stack.</p>
                        <Link to="/" className="btn btn-danger" onClick={handleLogout}>LogOut</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
