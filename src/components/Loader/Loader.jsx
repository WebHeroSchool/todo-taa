import styles from './Loader.module.css';

import loaderImg from './img/loader.svg';

const Loader = () => (
  <>
    <img src={loaderImg} className={styles.loader} alt="loader" />
  </>
);


export default Loader;
