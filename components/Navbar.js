import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; 
function Navbar() {

    const [navOpenStatus, setNavOpenStatus] = useState(false);

    const openNav = () => {
        setNavOpenStatus(!navOpenStatus);
    }
    return (
        <nav className="justify-between">
            <div className="logo">
                <a href="/"><img src="gyan.png" /></a>
            </div>
            <div>
                <a href="javascript:" className="menu-open" title="open canvas" onClick={openNav}>
                <FontAwesomeIcon style={{ fontSize: "25px"}} icon={faBars}></FontAwesomeIcon>
                </a>

                <div className={navOpenStatus ? "off-canvas-menu active" : "off-canvas-menu"}>
                    <div className="close-menu">
                        <a title="time" href="javascript:" className="close_nav" onClick={openNav}><FontAwesomeIcon style={{ fontSize: "25px"}} icon={faTimes}></FontAwesomeIcon></a>
                    </div>
                    <div className="dash-menu">
                        <ul className="flex flex-col items-start">
                            <li>
                                <a href="#">Flights</a>
                            </li>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={navOpenStatus ? "off-canvas-overlay active" : "off-canvas-overlay"} onClick={openNav}></div>
            </div>

        </nav>
    );
}

export default Navbar;