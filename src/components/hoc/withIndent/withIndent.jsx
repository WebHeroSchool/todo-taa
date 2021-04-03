import styles from './withIndent.module.css';

import mappedComponents from '../../../utils/mappedComponents';


const withIndent = WrappedComponents => (
  <div className={styles.indent}>
    { mappedComponents(WrappedComponents) }
  </div>
);


export default withIndent;
