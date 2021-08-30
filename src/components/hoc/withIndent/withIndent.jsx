import styles from './withIndent.module.css';

import toArray from '../../../utils/toArray';

const withIndent = (WrappedComponent, props) => (
  <div className={styles.indent}>
    {
      toArray(WrappedComponent).map(
        (Component, index) => (
          <Component {...props} key={index} />
        )
      )
    }
  </div>
);


export default withIndent;
