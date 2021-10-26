import {
  connect,
} from 'react-redux';

import {
  updateContactsStore as setState,
} from '../../store/actions/updateStore';
import {
  setContactsIsLoading as setIsLoading,
} from '../../store/actions/repos/setIsLoading';
import {
  setContactsIsError as setFetchError,
} from '../../store/actions/fetchError';

import Contacts from './Contacts';

import withFetch from '../hoc/withFetch/withFetch';

const url = `https://api.github.com/users/chiga2030`;


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
    fetch: state.fetch,
  }),
  {
    setState,
    setIsLoading,
    setFetchError,
  },
)(ContactsContainer);
