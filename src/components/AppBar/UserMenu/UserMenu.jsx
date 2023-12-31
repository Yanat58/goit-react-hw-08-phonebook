import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUsername } from 'redux/auth/selectors';
import css from './UserName.module.css';
import userAvatar from 'image/userAvatar.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  return (
    <div className={css.menu__box}>
      <img src={userAvatar} alt="user" width={70} />
      <p className={css.menu__text}>
        Welcom,
        <span className={css.menu__span}>{name}!</span>
      </p>
      <button
        className={css.menu__btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
