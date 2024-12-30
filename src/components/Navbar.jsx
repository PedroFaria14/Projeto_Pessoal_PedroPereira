import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

const Navbar = ({ menuOpen, toggleMenu }) => {
  return (
    <nav className={`${style.navbar} ${menuOpen ? style.openMenu : ''}`}>
      <NavLink to="/" exact className={style.link} activeClassName={style.active}>
        <span>  Pedro Faria</span>
      </NavLink>
      <div className={style.menuIcon} onClick={toggleMenu}>
        <div className={style.menuLine}></div>
        <div className={style.menuLine}></div>
        <div className={style.menuLine}></div>
      </div>
      <ul className={`${style.links_list} ${menuOpen ? style.showMenu : ''}`}>
        <li>
          <NavLink to="/" exact className={style.link} activeClassName={style.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact className={style.link} activeClassName={style.active}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Courses" exact className={style.link} activeClassName={style.active}>
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects" exact className={style.link} activeClassName={style.active}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/Languages" exact className={style.link} activeClassName={style.active}>
            Languages
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
