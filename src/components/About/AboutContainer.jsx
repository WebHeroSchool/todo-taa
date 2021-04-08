import {
  useState,
} from 'react';

import withFetch from '../hoc/withFetch/withFetch';

import About from './About';

const url = 'https://api.github.com/users/chiga2030/repos';


const AboutWithFetch = props => withFetch(About, {
  ...props,
});

const AboutContainer = props => {
  const [
    state,
    setState,
  ] = useState([]);

  return (
    <AboutWithFetch
      url={ url }
      state={ state }
      setState={ setState }
      { ...props }
    />
  );
};

export default AboutContainer;
