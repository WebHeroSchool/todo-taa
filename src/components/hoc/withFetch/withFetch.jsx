import {
  useEffect,
} from 'react';


const withFetch = (Component, props) => {
  useEffect(() => {
    setTimeout(() => {
      fetch(props.url)
        .then(data => data.json())
        .then(data => props.setState({
          ...data,
        }));
    }, 1000);
  }, []);


  return (
    <Component { ...props } />
  );
};


export default withFetch;
