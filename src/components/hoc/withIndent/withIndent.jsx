import styles from './withIndent.module.css';


const withIndent = WrappedComponent2 => (
  <div className={styles.indent}>
    <WrappedComponent2 />
  </div>
);


export default withIndent;
