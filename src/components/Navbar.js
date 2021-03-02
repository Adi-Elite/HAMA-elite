import React from 'react';
import Logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

export function Navbar() {
    return (
        <div className="box" >
                <div className="nav">
                    <img src={Logo} alt=""/>
                    <nav>
                        <b>Hotel Association <br></br>
                            of mount abu
                        </b>
                            <ul >
                                <li>
                                    <a className="navbar-brand" href="#">About Hama</a>
                                </li>
                                <li>
                                    <a className="navbar-brand" href="#">Organization</a>
                                </li>
                                <li>
                                    <a className="navbar-brand" href="#">Membership</a>
                                </li>
                                <li>
                                    <a className="navbar-brand" href="#">Activities & Milestones</a>
                                </li>
                                <li>
                                    <a class="navbar-brand" href="#">Publication</a>
                                </li>
                                <li>
                                    <a class="navbar-brand" href="#">Network / Affiliation</a>
                                </li>
                            </ul> 
                    </nav>
                </div>    
            </div>
    )
}
