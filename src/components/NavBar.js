import React, { useEffect, useState } from 'react';
import './NavBar.css'

const NavBar = () => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }   else handleShow(false);
        });
        return () => {
            window.addEventListener('scroll');
        };
    }, []);
    return (
        <div className = {`nav ${show && 'nav_black'}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix Logo" className="nav_logo"/>
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Netflix Avatar" className="nav_avatar"/>
        </div>
    );
};

export default NavBar;