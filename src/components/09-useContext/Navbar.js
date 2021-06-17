import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <h1 className="navbar-brand" href="#">useContext</h1>

                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <Link to="./" className="nav-item nav-link">
                          Home
                      </Link>

                      <Link to="./about" className="nav-item nav-link">
                          About
                      </Link>
                      <Link to="./login" className="nav-item nav-link">
                          login
                      </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
