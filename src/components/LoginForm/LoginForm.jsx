import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

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
    <form
      className={css.login__form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <b className={css.login__text}>Залиште свої дані, ми вам передзвонимо</b>

      <label className={css.login__label}>
        <span className={css.login__span}>Email</span>
        <input
          className={css.login__input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
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
          onChange={handleChange}
          placeholder="Enter password"
        />
      </label>

      <button className={css.login__btn} type="submit">
        <span>Log in</span>
      </button>
    </form>
  );
};
