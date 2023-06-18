import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.nav__list}>
      <li>
        <NavLink className={css.navLink} to="/register">
          Sign in
        </NavLink>
      </li>
      <li>
        <NavLink className={css.navLink} to="/login">
          Log in
        </NavLink>
      </li>
    </ul>
    // <div>
    //   <NavLink to="/register">Sign in</NavLink>
    //   <NavLink to="/login">Log in</NavLink>
    // </div>
  );
};
