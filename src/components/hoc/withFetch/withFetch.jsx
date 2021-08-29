import {
  useEffect,
} from 'react';


const withFetch = (Component, props) => {
  useEffect(() => {
    setTimeout(() => {
      fetch(props.url)
        .then(data => data.json())
        .then(data => console.log(data))
        .then(data => props.setState(data))
        .then(() => props.setIsLoading(false))
        .catch(data => props.setFetchError(data.toString()))
        .then(() => props.setIsLoading(false));
    }, 1000);
  }, []);


  return (
    <Component { ...props } />
  );
};


export default withFetch;
