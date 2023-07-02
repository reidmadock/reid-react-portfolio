import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';

export default function Header() {
  const [viewing, setViewing] = useState(<Home />);

  const handleClick = (view) => {
      setViewing(view);
  }

  return (
    <>
      <h3>Reid Madock</h3>
      <Navigation handleClick={handleClick}/>
      {viewing}
    </>
  );
}
