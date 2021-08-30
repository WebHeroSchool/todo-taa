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
import withIndent from '../hoc/withIndent/withIndent';
import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';

const url = 'https://api.github.com/users/chiga2030/repos';

const Test = () => (<p>Test</p>);

const AboutWithFetch = props => withFetch(About, {
  ...props,
});
const AboutWithIdent = props => withIndent([
  AboutWithFetch,
  Test,
], {
  ...props,
});
const AboutWithMyPaperLayer = props => withMyPaperLayer(AboutWithIdent, {
  ...props,
});


const AboutContainer = props => (
  <AboutWithMyPaperLayer
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
