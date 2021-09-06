import {
  useEffect,
} from 'react';


const withFetch = (Component, props) => {
  useEffect(() => {
    setTimeout(() => {
      fetch(props.url)
        .then(data => data.json())
        .then(data => {
          if (data.message) {
            props.setFetchError(data.message);
          } else if (data.length === 0) {
            props.setFetchError('empty', null);
          } else {
            props.setState(data);
          }
        })
        .then(() => props.setIsLoading(false))
        .catch(data => props.setFetchError('unknow', data.toString()))
        .then(() => props.setIsLoading(false));
    }, 1000);
  }, []);


  return (
    <Component { ...props } />
  );
};


export default withFetch;
