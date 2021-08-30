import {
  connect,
} from 'react-redux';

import {
  updateMyReposStore as setState,
} from '../../store/actions/updateStore';
import {
  setMyReposIsLoading as setIsLoading,
} from '../../store/actions/setIsLoading';
import {
  setMyReposIsError as setFetchError,
} from '../../store/actions/fetchError';

import MyRepos from '../MyRepos/MyRepos';

import withFetch from '../hoc/withFetch/withFetch';
// import withIndent from '../hoc/withIndent/withIndent';
// import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';

const url = 'https://api.github.com/users/chiga2030/repos';


const MyReposWithFetch = props => withFetch(MyRepos, {
  ...props,
});


// const MyReposWithIdent = props => withIndent([
//   MyReposWithFetch,
// ], {
//   ...props,
// });
// const MyReposWithMyPaperLayer = props => withMyPaperLayer(MyReposWithIdent, {
//   ...props,
// });


const MyReposContainer = props => (
  <MyReposWithFetch
    url={ url }
    { ...props }
  />
);


export default connect(
  state => ({
    contacts: state.contacts,
    repos: state.repos,
  }),
  {
    setState,
    setIsLoading,
    setFetchError,
  },
)(MyReposContainer);
