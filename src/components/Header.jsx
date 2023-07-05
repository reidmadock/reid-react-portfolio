import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';

export default function Header() {
  const [viewing, setViewing] = useState(<Home />);

  const handleClick = (view) => {
      setViewing(view);
      console.log(view);
      // event.target.className = event.target.className + ' clicked'
  }

  return (
    <>
      <div className='Header'>
        <h1>Reid Madock</h1>
        <Navigation handleClick={handleClick}/>
      </div>
      <div className='content center'>
      {viewing}
      </div>
    </>
  );
}
