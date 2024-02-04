import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show, handleshow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleshow(true);
            } else
                handleshow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return ( <
        div className = { `Nav ${show && "Nav__black"}` } >
        <
        img className = 'Nav__logo'
        src = { "https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg" }
        alt = { "logo" }
        />


        <
        /div>
    )
}

export default Nav