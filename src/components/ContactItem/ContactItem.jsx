import React from 'react';
import Notiflix from 'notiflix';
import { BiUserMinus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import person from 'image/person.png';

import css from './ContactItem.module.css';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <img
        style={{ marginRight: '5px' }}
        src={person}
        alt="person"
        width={45}
        height={45}
      />
      <p className={css.contactName}>{contact.name}</p>
      <p className={css.contactNumber}>{contact.number}</p>
      <button
        className={css.deletBtn}
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id))
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
