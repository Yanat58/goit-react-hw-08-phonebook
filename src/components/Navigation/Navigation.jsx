import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import logo1 from './logo1.png';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const activeClass = ({ isActive }) =>
    isActive ? `${css.active}` : `${css.navLink}`;

  return (
    <div className={css.nav__box}>
      <img
        className={css.logo__img}
        src={logo1}
        alt="logo"
        width={95}
        height={95}
      />
      <h1 className={css.titleAplication}>
        Phone<span className={css.titleColor}>book</span>
      </h1>

      <ul className={css.nav__list}>
        <li>
          <NavLink className={activeClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          {isLoggedIn && (
            <NavLink className={activeClass} to="/contacts">
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
      {/* <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
    </div>
  );
};
