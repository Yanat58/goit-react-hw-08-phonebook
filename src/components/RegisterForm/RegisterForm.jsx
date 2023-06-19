import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  // const [name, setName] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

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

    // const user = {
    //   name,
    //   email,
    //   password,
    // };

    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form
      className={css.register__form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <b className={css.register__text}>
        Залиште свої дані, ми вам передзвонимо
      </b>
      <label className={css.register__label}>
        <span className={css.register__span}>Username</span>
        <input
          className={css.register__input}
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          onChange={handleChange}
        />
      </label>

      <label className={css.register__label}>
        <span className={css.register__span}>Email</span>
        <input
          className={css.register__input}
          type="email"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={handleChange}
        />
      </label>

      <label className={css.register__label}>
        <span className={css.register__span}>Password</span>
        <input
          className={css.register__input}
          type="password"
          name="password"
          value={password}
          placeholder="Enter password"
          onChange={handleChange}
        />
      </label>

      <button className={css.register__btn} type="submit">
        <span>Sign in</span>
      </button>
    </form>
  );
};
