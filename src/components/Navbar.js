import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
    var em = localStorage.getItem("emailid")
    var aem = localStorage.getItem("aemailid")
    function ulogout() {
        localStorage.removeItem("emailid")
        window.location = "/"
    }
    function alogout() {
        localStorage.removeItem("aemailid")
        window.location = "/"
    }
    if (em == null && aem == null) {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-success navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Car Selling System</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cars">Cars</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/accessories">Accessories</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/feedback">Feedback</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/alogin">Admin Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
        )
    }
    else if (em != null && aem == null) {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-success navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Car Selling System</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cars">Cars</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/accessories">Accessories</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/feedback">Feedback</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/vcart">View Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ohistory">Order History</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={() => { ulogout() }}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
        )
    }
    else if (aem != null) {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-success navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Car Selling System</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/mcars">Manage Cars</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/maccessories">Manage Accessories</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/vfeedback">View Feedback</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/vorders">View Orders</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" onClick={() => { alogout() }}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
        )
    }
}
