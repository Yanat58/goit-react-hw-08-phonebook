import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  selectContactValue,
  selectFilterValue,
} from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const items = useSelector(selectContactValue);
  const filter = useSelector(selectFilterValue);

  const filterContactHandler = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    if (items) {
      return items
        .filter(contact =>
          contact.name.toLocaleLowerCase().includes(normalizedFilter)
        )
        .sort((firstItem, secondItem) =>
          firstItem.name.localeCompare(secondItem.name)
        );
    }
  };
  const filterContact = filterContactHandler();

  return (
    <>
      <ul className={css.contactList}>
        {filterContact.map(item => (
          <li className={css.contactItem} key={item.id}>
            <ContactItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
