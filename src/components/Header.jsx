import React from 'react';
import Navigation from './Navigation';
import { Typography } from '@mui/material';

export default function Header() {
  return (
    <>
      <div className='Header'>
        <Typography component={'h2'} fontStyle={'italic'} fontSize={'3rem'} fontWeight={600}>
          Reid Madock
        </Typography>
        <Navigation/>
      </div>
    </>
  );
}
