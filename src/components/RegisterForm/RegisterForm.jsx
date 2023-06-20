import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

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
    <>
      <h2 className={css.title__section}>Create your account</h2>
      <form className={css.register__form} onSubmit={handleSubmit}>
        <label className={css.register__label}>
          <span className={css.register__span}>Username</span>
          <input
            className={css.register__input}
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={e => {
              setName(e.target.value);
            }}
            required
            autoComplete="off"
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
            onChange={e => {
              setEmail(e.target.value);
            }}
            required
            autoComplete="off"
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
            onChange={e => {
              setPassword(e.target.value);
            }}
            required
            autoComplete="off"
          />
        </label>

        <button className={css.register__btn} type="submit">
          <span>Sign up</span>
        </button>
      </form>
    </>
  );
};
