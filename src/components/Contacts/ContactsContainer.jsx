import {
  Suspense,
  lazy,
} from 'react';

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

import withFetch from '../hoc/withFetch/withFetch';

const Loader = lazy(() => import('../Loader/Loader'));
const Contacts = lazy(() => import('./Contacts'));


const url = `https://api.github.com/users/chiga2030`;


const ContactsWithFetch = props => withFetch(Contacts, {
  ...props,
});


const ContactsContainer = props => (
  <Suspense fallback={<Loader />}>
    <ContactsWithFetch
      url={ url }
      { ...props }
    />
  </Suspense>
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
