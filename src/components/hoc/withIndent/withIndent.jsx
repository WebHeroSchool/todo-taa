import styles from './withIndent.module.css';


const withIndent = (WrappedComponent, props) => (
  <div className={styles.indent}>
    <WrappedComponent {...props} />
  </div>
);


export default withIndent;
