import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/Susi.png';
import userIcon from '../assets/static/user-icon.png'

const Header = () => {
    return(
        <div className='header'>
    <header class="header">
    <img src={logo} class="header__img"  alt="Susi" />
    <div class="header__menu">
      <div class="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
        </div>
    );
};
export default Header;