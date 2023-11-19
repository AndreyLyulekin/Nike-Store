import React from 'react';
import Links from './Links';
import search from '../images/Search.png';
import shoppingBag from '../images/ShoppingBag.png';
import user from '../images/User.png';

import logo from '../images/Logo.png';
export default function Icons() {
  return (
    <>
      <div className='header__nav_left'>
        <div className='menu-btn'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Links />
      </div>
      <img
        src={logo}
        className='header__logo'
        alt='Nike-Logo'
      />
      <div className='header__nav_right'>
        <img
          src={search}
          alt='Search-Icon'
        />
        <img
          src={shoppingBag}
          alt='ShoppingBag-Icon'
        />
        <img
          src={user}
          alt='user-Icon'
        />
      </div>
    </>
  );
}
