import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
export  function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="main-content">
                    <div className="left box">
                        <h5>About HAMA</h5>
                        <div className="content">
                        <ul>
                            <li ><a href="#">About HAMA</a></li>
                            <li><a href="#">Mission</a></li>
                            <li><a href="#">Objectives</a></li>
                        </ul>
                        <h5>Network / Affilliation</h5>
                        <ul>
                            <li><a href="">About HAMA</a></li>
                            <li><a href="">Mission</a></li>
                            <li><a href="">Objectives</a></li>
                        </ul>
                    </div>
                </div>
                <div className="center box">
                    <h5>Organization</h5>
                    <div className="content">
                    <div className="organization" >
                       <ul>
                           <li>
                               <a href="">
                                   What We Do
                               </a>
                           </li>
                           <li>
                            <a href="">
                                Management Committee 2020-21
                            </a>
                        </li>
                        <li>
                            <a href="#">
                               Executive Committee 2020-21
                            </a>
                        </li>
                        <li>
                            <a href="#">
                               HAMA Secretariat
                            </a>
                        </li>
                       </ul>
                    </div>
                </div>
            </div>
            <div className="right box">
                <h5>Membership</h5>
                <div className="contact">
                   <ul>
                       <li>
                       <a href="#">
                           Why should you be a Member?
                       </a>
                   </li>
                   <li>
                    <a href="#">
                        Our Member Profile
                    </a>
                </li>
                <li>
                    <a href="#">
                       Membership Detail
                    </a>
                </li>
                <li>
                    <a href="#">
                        Discount Card Details
                    </a>
                </li>
                <li>
                    <a href="#">
                        List of HAMA Member Hotels
                    </a>
                </li>
                <li>
                    <a href="#">
                        List of HAMA Associate Members
                    </a>
                </li>
                </ul>
                </div>
            </div>
            <div className="right box">
                <h5>Activities & Milestones</h5>
                <div className="contact">
                   <ul>
                       <li>
                           <a href="#">
                              6th HAMA HAND HYGIENE CELEBRATIONS
                            </a>
                       </li>
                        <li>
                         <a href="#">
                            5th MAY 2020
                        </a>
                        </li>
                         <li>
                            <a href="#">
                                22nd HAMA World Environment Day
                            </a>
                        </li>
                    <li>
                        <a href="#">
                            Celebrations 5th June 2020
                        </a>
                    </li>
                     </ul>
                </div>
            </div>

        </div>
        <div className="footer-bottom">
            &copy; Copyright 2020. All Rights Reserved. Designed, Developed and Maintained by <a href="#">Elite Mantra</a> 
         </div>
    </footer>
    </div>

    )
}
