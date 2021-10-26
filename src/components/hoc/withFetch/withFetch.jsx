import {
  useEffect,
} from 'react';


const ak = 'dXNlcm5hbWU6Z2hwX0lsZTVHbWJSWkN4SVdNTjdtR01sVWtENlJYd3oxWTJGSDR4Nw';
const auth = `Basic ${ak}`;

const withFetch = (Component, props) => {
  useEffect(() => {
    if (props.error) {
      props.setIsLoading(true);
    };
    fetch(props.url,
      {
        method: 'GET',
        headers: {
          'Authorization': auth,
        },
      }
    )
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
      .catch(data => props.setFetchError('fetch error', data))
      .then(() => props.setIsLoading(false))
      .then(() => props.setIsSubLoading(false));
  }, [
    props.fetch.isRefresh,
    props.url,
  ]);


  return (
    <Component { ...props } />
  );
};


export default withFetch;
