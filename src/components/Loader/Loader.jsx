import {
  Suspense,
  lazy,
} from 'react';

import styles from './Loader.module.css';

const CircularProgress = lazy(() => import(
  '@material-ui/core/CircularProgress'));


const Loader = () => (
  <Suspense>
    <CircularProgress className={ styles.loader } color="secondary" />
  </Suspense>
);


export default Loader;
