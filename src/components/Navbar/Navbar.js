import React from 'react'
import './navbar.css'
import { useNavigate,Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand navLogo" to="/">Resume<span>Builder</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-3 mt-2 mr-auto navitems">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contactus">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active resumeBTN" aria-current="page" to="/header">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar