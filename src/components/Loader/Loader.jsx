import styles from './Loader.module.css';

import {
  CircularProgress,
} from '@material-ui/core';


const Loader = () => (
  <CircularProgress className={ styles.loader } color="secondary" />
);


export default Loader;
