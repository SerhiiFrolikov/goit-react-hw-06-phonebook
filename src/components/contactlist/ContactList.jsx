import { useSelector, useDispatch } from 'react-redux';
import { getContactsNames, removeContact } from 'redux/contactsSlice';
import { getFilteredNames } from 'redux/filterSlice';
import {
  List,
  ListItem,
  Name,
  PhoneNumber,
  DeleteBtn,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsNames);
  const queryFilter = useSelector(getFilteredNames);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(queryFilter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            <Name>
              {name}: <PhoneNumber>{number}</PhoneNumber>
            </Name>
            <DeleteBtn id={id} onClick={() => dispatch(removeContact(id))}>
              Delete
            </DeleteBtn>
          </ListItem>
        );
      })}
    </List>
  );
};
