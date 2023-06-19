import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const activeClass = ({ isActive }) =>
    isActive ? `${css.active}` : `${css.nav__link}`;

  return (
    <ul className={css.nav__list}>
      <li>
        <NavLink className={activeClass} to="/register">
          Sign in
        </NavLink>
      </li>
      <li>
        <NavLink className={activeClass} to="/login">
          Log in
        </NavLink>
      </li>
    </ul>
  );
};
