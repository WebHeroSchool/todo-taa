import {
  useEffect,
} from 'react';


const withFetch = (Component, props) => {
  useEffect(() => {
    props.setIsLoading(true);
    setTimeout(() => {
      fetch(props.url)
        .then(data => data.json())
        .then(data => {
          if (data.message === 'Not Found') {
            props.setFetchError(data.message);
          } else if (data.length === 0) {
            props.setFetchError('empty');
          } else {
            props.setState(data);
          }
        })
        .then(() => props.setIsLoading(false))
        .catch(data => props.setFetchError('fetch error', data))
        .then(() => props.setIsLoading(false));
    }, 1000);
  }, [
    props.fetch.isRefresh,
  ]);


  return (
    <Component { ...props } />
  );
};


export default withFetch;
