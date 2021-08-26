import {
  connect,
} from 'react-redux';
import {
  updateStore as setState,
} from '../../store/actions/updateStore';

import Contacts from './Contacts';

import withFetch from '../hoc/withFetch/withFetch';

const url = 'https://api.github.com/users/chiga2030';


const ContactsWithFetch = props => withFetch(Contacts, {
  ...props,
});


const ContactsContainer = props => (
  <ContactsWithFetch
    url={ url }
    { ...props }
  />
);


export default connect(
  state => ({
    contacts: state.contacts,
  }),
  {
    setState,
  },
)(ContactsContainer);
