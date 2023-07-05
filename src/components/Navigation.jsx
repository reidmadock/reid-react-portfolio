import React, { useState } from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

export default function Navigation({ handleClick }) {
    const handleHover = function (event) {
        event.target.className = (event.target.className == 'nav' ? 'nav-active' : 'nav');
    }

    return (
        <nav>
            <ul>
                <li 
                    className="nav" 
                    onClick={() => handleClick(<Home />)} 
                    onMouseEnter={(event) => handleHover(event)}
                    onMouseLeave={(event) => handleHover(event)}
                >
                    Home
                </li>
                <li 
                    className="nav" 
                    onClick={() => handleClick(<Portfolio />)} 
                    onMouseEnter={(event) => handleHover(event)}
                    onMouseLeave={(event) => handleHover(event)}
                    >
                    Portfolio
                </li>
                <li 
                    className="nav" 
                    onClick={() => handleClick(<Resume />)} 
                    onMouseEnter={(event) => handleHover(event)}
                    onMouseLeave={(event) => handleHover(event)}
                    >
                    Resume
                </li>
                <li 
                    className="nav" 
                    onClick={() => handleClick(<Contact />)} 
                    onMouseEnter={(event) => handleHover(event)}
                    onMouseLeave={(event) => handleHover(event)}
                    >
                    Contact
                </li>
                {/* <li className="nav" onClick={() => handleClick(<Portfolio />)}>Portfolio</li> */}
                {/* <li className="nav" onClick={() => handleClick(<Resume />)}>Resume</li> */}
                {/* <li className="nav" onClick={() => handleClick(<Contact />)}>Contact</li> */}
            </ul>
        </nav>
    );
}