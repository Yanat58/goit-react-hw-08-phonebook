import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Message } from 'components/Message/Message';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContactValue } from 'redux/contacts/selectors';
import phone1 from 'image/phone1.png';

const ContactsPage = () => {
  const contacts = useSelector(selectContactValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <ContactForm />

        <Filter />
        {contacts.length === 0 ? <Message /> : <ContactList />}
      </div>

      <img
        style={{
          backgroundSize: 'cover',
        }}
        src={phone1}
        alt="phone"
        width={500}
      />
    </div>
  );
};

export default ContactsPage;
