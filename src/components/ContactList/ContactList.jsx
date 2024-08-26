import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
 import { getFilteredContacts } from '../../Redux/selectors';
import { deleteContact } from '../../Redux/operations';
import React from 'react';
import { useEffect } from 'react';
import { fetchContacts } from '../../Redux/operations';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  // const contacts = useSelector(getContacts);

  // Aici salvam contactele cand se face update la ele
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ol>
        {contacts?.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={() => handleDeleteContact(contact.id)}
          />
        ))}
      </ol>
    </>
  );
}

export default ContactList;
