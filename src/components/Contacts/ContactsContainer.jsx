import {
  connect,
} from 'react-redux';

import {
  updateContactsStore as setState,
} from '../../store/actions/updateStore';
import {
  setContactsIsLoading as setIsLoading,
} from '../../store/actions/setIsLoading';
import {
  setContactsIsError as setFetchError,
} from '../../store/actions/fetchError';

import Contacts from './Contacts';

import withFetch from '../hoc/withFetch/withFetch';
import withIndent from '../hoc/withIndent/withIndent';
import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';

const url = 'https://api.github.com/users/chiga2030';


const ContactsWithFetch = props => withFetch(Contacts, {
  ...props,
});
const ContactsWithIdent = props => withIndent(ContactsWithFetch, {
  ...props,
});
const ContactsWithMyPaperLayer = props => withMyPaperLayer(ContactsWithIdent, {
  ...props,
});


const ContactsContainer = props => (
  <ContactsWithMyPaperLayer
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
    setIsLoading,
    setFetchError,
  },
)(ContactsContainer);
