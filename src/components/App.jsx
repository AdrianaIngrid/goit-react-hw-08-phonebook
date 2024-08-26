import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import styles from './ContactForm/ContactForm.module.css';






function App() {

  return (
    <div className={styles.box}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={styles.titleContact}>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
}

export default App;
