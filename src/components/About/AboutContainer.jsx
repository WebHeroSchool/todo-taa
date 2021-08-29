import {
  connect,
} from 'react-redux';

import {
  updateAboutStore as setState,
} from '../../store/actions/updateStore';
import {
  setAboutIsLoading as setIsLoading,
} from '../../store/actions/setIsLoading';
import {
  setAboutIsError as setFetchError,
} from '../../store/actions/fetchError';

import About from './About';

import withFetch from '../hoc/withFetch/withFetch';

const url = 'https://ithub.com/users/chiga2030/repos';


const AboutWithFetch = props => withFetch(About, {
  ...props,
});


const AboutContainer = props => (
  <AboutWithFetch
    url={ url }
    { ...props }
  />
);


export default connect(
  state => ({
    about: state.about,
  }),
  {
    setState,
    setIsLoading,
    setFetchError,
  },
)(AboutContainer);
