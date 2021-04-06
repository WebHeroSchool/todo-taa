import {
  connect,
} from 'react-redux';
import {
  readContacts,
} from '../../store/actions/readContactsAction';

import Contacts from './Contacts';

import {
  useEffect,
} from 'react';


const ContactsContainer = props => {
  useEffect(() => {
    setTimeout(() => {
      fetch('https://api.github.com/users/chiga2030')
        .then(data => data.json())
        .then(data => props.readContacts({
          name: data.name,
          login: data.login,
          location: data.location,
        }));
    }, 1000);
  }, []);

  return <Contacts { ...props } />;
};


export default connect(
  state => ({
    contacts: state.contacts,
  }),
  {
    readContacts,
  },
)(ContactsContainer);
