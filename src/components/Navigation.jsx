import React, { useState } from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';

export default function Navigation({ handleClick }) {
    // const [viewing, setViewing] = useState(<Home />);

    // const handleClick = (view) => {
    //     setViewing(view);
    // }

    return (
        <nav>
            <ul>
                <li onClick={() => handleClick(<Home />)}>Home</li>
                <li onClick={() => handleClick(<Portfolio />)}>Portfolio</li>
                <li onClick={() => handleClick(<Resume />)}>Resume</li>
            </ul>
        </nav>
    );
}