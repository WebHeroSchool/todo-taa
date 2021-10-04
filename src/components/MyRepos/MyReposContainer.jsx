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
import {
  refreshFetchData,
} from '../../store/actions/refreshFetchData';
import {
  useState,
  useEffect,
} from 'react';


import MyRepos from '../MyRepos/MyRepos';
import withFetch from '../hoc/withFetch/withFetch';


const MyReposWithFetch = props => withFetch(MyRepos, {
  ...props,
});


const MyReposContainer = props => {
  const [
    page,
    setPage,
  ] = useState(1);

  const myUrl =
  `https://api.github.com/users/chiga2030/repos?per_page=6&page=${page}`;

  const [
    url,
    setUrl,
  ] = useState(myUrl);

  useEffect(() => {
    setUrl(myUrl);
  }, [
    page,
  ]);

  return (
    <MyReposWithFetch
      url={ url }
      setPage={ setPage }
      error={ props.repos.fetchReposFailure }
      { ...props }
    />
  );
};


export default connect(
  state => ({
    contacts: state.contacts,
    repos: state.repos,
    fetch: state.fetch,
  }),
  {
    setState,
    setIsLoading,
    setFetchError,
    refreshFetchData,
  },
)(MyReposContainer);
