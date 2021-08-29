import {
  Paper,
} from '@material-ui/core';
import styles from './withMyPaperLayer.module.css';

import mappedComponents from '../../../utils/mappedComponents';

const withMyPaperLayer = WrappedComponents => (
  <Paper className={styles.paper} elevation={3} >
    { mappedComponents(() => WrappedComponents) }
  </Paper>
);


export default withMyPaperLayer;
