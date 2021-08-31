import {
  Paper,
} from '@material-ui/core';
import styles from './withMyPaperLayer.module.css';

const withMyPaperLayer2 = (Component, props) => (
  <Paper className={styles.paper} elevation={3}>
    <Component {...props} />
  </Paper>
);

export default withMyPaperLayer2;
