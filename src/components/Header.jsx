import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';

export default function Header() {
  return (
    <>
      <div className='Header'>
        <h1>Reid Madock</h1>
        <Navigation/>
      </div>
    </>
  );
}
