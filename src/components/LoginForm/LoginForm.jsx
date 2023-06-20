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
      <form className={css.login__form} onSubmit={handleSubmit}>
        <h2 className={css.title__section}>Log in to phone book</h2>

        <label className={css.login__label}>
          <span className={css.login__span}>Email</span>
          <input
            className={css.login__input}
            type="email"
            name="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
            required
            autoComplete="off"
          />
        </label>

        <label className={css.login__label}>
          <span className={css.login__span}>Password</span>
          <input
            className={css.login__input}
            type="password"
            name="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password"
            required
            autoComplete="off"
          />
        </label>

        <button className={css.login__btn} type="submit">
          <span>Log in</span>
        </button>

        <p className={css.login__text}>Don't have an account yet?</p>
        <NavLink className={css.login__nav} to="/register">
          <p className={css.login__link}>
            Sign up. It's free and takes five seconds.
          </p>
        </NavLink>
      </form>
    </>
  );
};
