import React from 'react';
import Notiflix from 'notiflix';
import { BiUserMinus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import person from './person.png';
import css from './ContactItem.module.css';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      <img
        src={item.avatar || person}
        alt={item.name}
        className={css.contactImg}
      />
      <p className={css.contactName}>{item.name}</p>
      <p className={css.contactNumber}>{item.phone}</p>
      <button
        className={css.deletBtn}
        type="button"
        onClick={() => {
          dispatch(deleteContact(item.id))
            .unwrap()
            .then(() => Notiflix.Notify.success(`Delete contact`));
        }}
      >
        <span>
          <BiUserMinus className={css.btnDeleteIcon} size={20} />
        </span>
      </button>
    </>
  );
};
