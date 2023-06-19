import React from 'react';
import Notiflix from 'notiflix';
import { BiUserPlus } from 'react-icons/bi';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContactValue } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');

  const contacts = useSelector(selectContactValue);
  const dispatch = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();

    const contact = {
      name,
      number,
    };

    const nameIsExist = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    const numberIsExist = contacts.some(
      contact => contact.number.trim() === number.trim()
    );

    if (name.trim() === '' || number.trim() === '') {
      Notiflix.Notify.warning(`Fields must be filled`);
    } else if (nameIsExist) {
      Notiflix.Report.warning(`This ${name} is already in contacts`);
    } else if (numberIsExist) {
      Notiflix.Report.warning(`This ${number} is already in contacts`);
    } else {
      dispatch(addContact(contact));

      Notiflix.Notify.success(`Add contact`);
    }

    setName('');
    setNumber('');
  };

  return (
    <>
      <h1 className={css.form__title}>Add new contact</h1>
      <form className={css.formBox} onSubmit={handlerSubmit}>
        <label className={css.label} htmlFor="idName">
          <p className={css.labelText}>Name</p>
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
        <label className={css.label} htmlFor="idNumber">
          <p className={css.labelText}>Phone</p>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter number number"
            id="idNumber"
            onChange={e => setNumber(e.currentTarget.value)}
          />
        </label>

        <button className={css.btnAdd} type="submit">
          <BiUserPlus className={css.btnAddIcon} size={25} />
          <span className={css.btnAddText}>Add contact</span>
        </button>
      </form>
    </>
  );
};
