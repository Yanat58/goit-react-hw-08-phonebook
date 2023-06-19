import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Message } from 'components/Message/Message';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContactValue } from 'redux/contacts/selectors';
import homeImg from 'components/image/homeImg.png';

const ContactsPage = () => {
  const contacts = useSelector(selectContactValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <ContactForm />

        <Filter />
        {contacts.length === 0 ? <Message /> : <ContactList />}
      </div>

      <img
        style={{ display: 'flex', marginLeft: 'auto', marginRight: '40px' }}
        src={homeImg}
        alt="logo"
        width={550}
        // height={750}
      />
    </div>
  );
};

export default ContactsPage;
