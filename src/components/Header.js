import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/header.css';



const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const openBurgerMenu = () => {
    setOpenBurger(true);
  };

  const closeBurgerMenu = () => {
    setOpenBurger(false);
  };

  return (
    <header className='header'>
      <a href='/'><img src={require('../images/logo_white.png')} alt='logo' className='logo-header' /></a>
      <div className='right-header-container'>
        <Navbar handleOpen={openBurgerMenu} handleClose={closeBurgerMenu} show={openBurger} />
      </div>
    </header>
  );
};

export default Header;