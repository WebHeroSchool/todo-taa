import styles from './withRedBg.module.css';

const withRedBg = Component => (
  <div className={styles.redBg}>
    <Component />
  </div>
);

export default withRedBg;
