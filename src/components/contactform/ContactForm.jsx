import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContactsNames } from 'redux/contactsSlice';
import {
  Form,
  AddContactBtn,
  FormLabel,
  FormInput,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsNames);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const addContacts = e => {
    e.preventDefault();
    const addedName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (addedName) {
      return alert(`${name} is already in contacts`);
    }

    const id = nanoid(10);
    dispatch(addContact({ id, name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={addContacts}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Serhii"
          onChange={onChange}
          value={name}
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="000 000 00 00"
          onChange={onChange}
          value={number}
          required
        />
      </FormLabel>
      <AddContactBtn>Add contacts</AddContactBtn>
    </Form>
  );
};
