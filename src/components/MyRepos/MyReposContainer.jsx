import {
  connect,
} from 'react-redux';

import {
  updateMyReposStore as setState,
} from '../../store/actions/updateStore';
import {
  setMyReposIsLoading as setIsLoading,
  setIsSubLoading,
} from '../../store/actions/repos/setIsLoading';
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
  useEffect(() => {
    if (document.documentElement.offsetWidth > 480) {
      return setPerPage(6);
    };
  }, []);

  const [
    perPage,
    setPerPage,
  ] = useState(3);

  const [
    page,
    setPage,
  ] = useState(1);

  const host = 'https://api.github.com';
  const myUrl =
  `${host}/users/chiga2030/repos?per_page=${perPage}&page=${page}`;

  const [
    url,
    setUrl,
  ] = useState(myUrl);

  useEffect(() => {
    setUrl(myUrl);
  }, [
    page,
    perPage,
  ]);

  return (
    <MyReposWithFetch
      host={ host }
      url={ url }
      setPage={ setPage }
      error={ props.repos.fetchReposFailure }
      perPage={ perPage }
      setIsSubLoading={ setIsSubLoading }
      { ...props }
    />
  );
};


export default connect(
  state => ({
    contacts: state.contacts,
    repos: state.repos,
    fetch: state.fetch,
    isSubLoading: state.repos.isSubLoading,
  }),
  {
    setState,
    setIsLoading,
    setIsSubLoading,
    setFetchError,
    refreshFetchData,
  },
)(MyReposContainer);
