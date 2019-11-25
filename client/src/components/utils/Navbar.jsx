import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <>
            <header>
                <nav className="container justify-content-end navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><i className="flaticon-gym"></i></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        
                        <ul className="navbar-nav ml-auto">
                        <div className="nav-list-container">
                            {props.currentUser
                            ? (
                                <>
                                    
                                        <li className="nav-item hover">
                                            <NavLink exact={true} className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                
                                        <li className="nav-item hover">
                                            <NavLink className="nav-link" to="/products">Product</NavLink>
                                        </li>
                                        <li className="nav-item hover">
                                            <NavLink className="nav-link" to="/contacts">Contact</NavLink>
                                        </li>
                                        <li className="nav-item hover">
                                            <NavLink className="nav-link" to ="/admin">Admin</NavLink>
                                        </li>
                                        <li className="nav-item hover">
                                            <NavLink className="nav-link" to ="/logout">Log Out</NavLink>
                                        </li>
                                    
                                </>
                            )
                            : (
                                <>
                                    <li className="nav-item hover">
                                        <NavLink exact={true} className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                            
                                    <li className="nav-item hover">
                                        <NavLink className="nav-link" to="/products">Product</NavLink>
                                    </li>
                                    <li className="nav-item hover">
                                        <NavLink className="nav-link" to="/contacts">Contact</NavLink>
                                    </li>
                                    <li className="nav-item hover">
                                        <NavLink className="nav-link" to ="/login">Log In</NavLink>
                                    </li>
                                    <li className="nav-item hover">
                                        <NavLink className="nav-link" to ="/signup">Sign Up</NavLink>
                                    </li>
                                </> 
                            )}  
                            </div>    
                        </ul>
                    </div>
                </nav>
            </header>        
        </>
    )
}

export default Navbar;