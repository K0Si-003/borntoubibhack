import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

import BurgerButton from './BurgerButton';

const Navbar = ({ show, handleOpen, handleClose }) => {
  let navClasses = 'nav-menu';
  if (show) {
    navClasses = 'nav-menu open';
  }

  return (
    <>
      <BurgerButton handleClick={handleOpen} />
      <nav className={`mobile-menu ${navClasses}`}>
        <div className='closing-menu'>
          <i className='fas fa-times' onClick={handleClose} />
        </div>
        <ul className='menuItems'>
          <li><NavLink onClick={handleClose} to='/'>Acceuil</NavLink></li>
          <li><NavLink onClick={handleClose} to='/annonces'>Annonces</NavLink></li>
          <li><NavLink onClick={handleClose} to='/mes-recherches'>Mes recherches</NavLink></li>
          <li><NavLink onClick={handleClose} to='/FAQ'>FAQ</NavLink></li>
        </ul>
      </nav>
      <nav className='desktop-menu'>
        <ul>
          <li><NavLink className='menu-item-desktop' exact activeClassName='active' to='/'>Acceuil</NavLink></li>
          <li><NavLink className='menu-item-desktop' activeClassName='active' to='/annonces'>Annonces</NavLink></li>
          <li><NavLink className='menu-item-desktop' activeClassName='active' to='/mes-recherches'>Mes recherches</NavLink></li>
          <li><NavLink className='menu-item-desktop' activeClassName='active' to='/FAQ'>FAQ</NavLink></li>
        </ul>
        <div>

        </div>

      </nav>
    </>
  );
};

export default Navbar;