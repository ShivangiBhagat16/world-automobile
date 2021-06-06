import { React, useState } from 'react'
import './Navbar.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
    return <div className="Nav">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1><a href="/">World Automobile</a></h1>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/contactus">Contact Us</a></li> 
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
export default Navbar;