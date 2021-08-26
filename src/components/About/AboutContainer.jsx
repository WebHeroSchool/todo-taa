import {
  connect,
} from 'react-redux';
import {
  updateStore as setState,
} from '../../store/actions/updateStore';

import About from './About';

import withFetch from '../hoc/withFetch/withFetch';

const url = 'https://api.github.com/users/chiga2030/repos';


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
  },
)(AboutContainer);
