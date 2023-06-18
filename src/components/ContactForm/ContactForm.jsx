import React from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { BiUserPlus } from 'react-icons/bi';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContactValue } from 'redux/contacts/selectors';

export const ContactForm = ({ onClose }) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const items = useSelector(selectContactValue);
  const dispatch = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();

    const contact = {
      name,
      phone,
    };

    const nameIsExist = items.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    const phoneIsExist = items.some(
      contact => contact.phone.trim() === phone.trim()
    );

    if (name.trim() === '' || phone.trim() === '') {
      Notiflix.Notify.warning(`Fields must be filled`);
    } else if (nameIsExist) {
      Notiflix.Report.warning(`This ${name} is already in contacts`);
    } else if (phoneIsExist) {
      Notiflix.Report.warning(`This ${phone} is already in contacts`);
    } else {
      dispatch(addContact(contact));

      Notiflix.Notify.success(`Add contact`);
    }
    onClose();
    setName('');
    setPhone('');
  };

  return (
    <form className={css.formBox} onSubmit={handlerSubmit}>
      <label className={css.label} htmlFor="idName">
        <b className={css.labelText}>Name</b>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          id="idName"
          onChange={e => setName(e.currentTarget.value)}
        />
      </label>
      <label className={css.label} htmlFor="idPhone">
        <b className={css.labelText}>Phone</b>
        <input
          className={css.input}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          id="idPhone"
          onChange={e => setPhone(e.currentTarget.value)}
        />
      </label>

      <button className={css.btnAdd} type="submit">
        <BiUserPlus className={css.btnAddIcon} size={25} />
        <span className={css.btnAddText}>Add contact</span>
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
