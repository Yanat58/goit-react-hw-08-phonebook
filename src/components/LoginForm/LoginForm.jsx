import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email,
        password,
      })
    );

    setEmail('');
    setPassword('');
  };
  return (
    <>
    <h2 className={css.title__section} >Log in to phone book</h2>

    <form
      className={css.login__form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >

      <label className={css.login__label}>
        <span className={css.login__span}>Email</span>
        <input
          className={css.login__input}
          type="email"
          name="email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          placeholder="Enter email"
        />
      </label>

      <label className={css.login__label}>
        <span className={css.login__span}>Password</span>
        <input
          className={css.login__input}
          type="password"
          name="password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          placeholder="Enter password"
        />
      </label>

      <button className={css.login__btn} type="submit">
        <span>Log in</span>
      </button>
    </form>
    <p className={css.login__text} >Don't have an account yet?</p>
    <NavLink to="/register">
      <p className={css.login__text} >Sign up. It's free and takes five seconds.</p>
    </NavLink>
    
    </>
  );
};
