import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactValue,
  selectFilterValue,
} from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContactValue);
  const filter = useSelector(selectFilterValue);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  const filterContactHandler = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    if (!filter) {
      return contacts;
    }
    return contacts
      .filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter)
      )
      .sort((firstItem, secondItem) =>
        firstItem.name.localeCompare(secondItem.name)
      );
  };
  const filterContact = filterContactHandler();

  return (
    <>
      <ul className={css.contactList}>
        {filterContact?.map(contact => (
          <li className={css.contactItem} key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};
