import {
  useState,
  useEffect,
} from 'react';


const useTest = newVal => {
  const [
    test,
    setTest,
  ] = useState(null);

  useEffect(() => {
    if (newVal) {
      setTest(newVal);
    }
  });

  return test;
};


export default useTest;
