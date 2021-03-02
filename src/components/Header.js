import React from 'react';
import Facebook  from "../assets/facebookicon.png";
import Twitter from "../assets/twittericon.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

export  function Header() {
    return (
        <div>
            <header>
            <h4>Follow Us:</h4>
            &nbsp;&nbsp;
            <a href=""><img src={Facebook} alt="" /></a>
            &nbsp; &nbsp;
            <a href="#"><img src={Twitter} alt="" /></a>
            <ul className="left_menu" >
                <li>
                    <a href="#">Home</a> |
            </li>
            &nbsp;&nbsp;
            <li>
                    <a href="#">Login</a> |
            </li>
            &nbsp;&nbsp;
            <li>
                    <a href="#">Join</a> |
            </li>
            &nbsp;&nbsp;
            <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <div className="search" >
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
            </header>
        </div>
    )
}
