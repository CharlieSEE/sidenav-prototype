import React from 'react'
import {  } from "../css/Cnav.min.css";

const Cnav = () => {
    return (
        <nav className='sideNav'>
            <div className="logo">
                <img src="./img/img1.webp" alt="Site Logo"/>
            </div>
            <ul className="sideNavOptContainer">
                <li className="sideNavOpt">1</li>
                <li className="sideNavOpt">2</li>
                <li className="sideNavOpt">3</li>
                <li className="sideNavOpt">4</li>
            </ul>
        </nav>
    )
}

export default Cnav
