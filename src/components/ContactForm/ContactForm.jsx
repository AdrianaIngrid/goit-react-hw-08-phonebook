import styles from './ContactForm.module.css';
import React, { useState } from 'react';
import { IoMdPersonAdd } from 'react-icons/io';
import { BsTelephonePlusFill } from 'react-icons/bs';
import { addContact } from '../../Redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../Redux/selectors';


function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);


  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'name') setName(value);

    if (name === 'phone') setNumber(value);
  }
  const handleSubmit = event => {
    event.preventDefault();

    // Verifică dacă contactul există deja
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`Contact with name "${name}" already exists.`);
      return;
    }

    const newContact = {
      name,
      phone,
    };

    dispatch(addContact(newContact)); // Adaugă contactul în Redux

    // Resetează formularul și state-ul local
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        {' '}
        Name{' '}
        <span className={styles.spanForm}>
          <IoMdPersonAdd />
        </span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          // pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label className={styles.label}>
        {' '}
        Number{' '}
        <span className={styles.spanForm}>
          <BsTelephonePlusFill />
        </span>
        <input
          type="tel"
          name="text"
          value={phone}
          onChange={handleChange}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button type="submit" className={styles.addbtn}>
        Add Contacts
      </button>
    </form>
  );
}

export default ContactForm;