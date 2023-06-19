import React from 'react';
import css from './Message.module.css';

export const Message = () => {
  return (
    <>
      <h2 className={css.titleSection}>Contact list</h2>
      <p className={css.message__text}>There are no any contacts ... </p>
    </>
  );
};
