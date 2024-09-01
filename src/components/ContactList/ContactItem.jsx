import React from 'react';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

function ContactItem({ contact, onDelete }) {
  console.log("typeof:", typeof contact);
  const { name, number } = contact;

  return (
    <div className={styles.contactList}>
      <li className={styles.contactItem}>
        <p>
          {name} : * Phone: {number}
        </p>

        <button type="button" onClick={onDelete} className={styles.deleteBtn}>
          Delete
        </button>
      </li>
    </div>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
};
export default ContactItem;

