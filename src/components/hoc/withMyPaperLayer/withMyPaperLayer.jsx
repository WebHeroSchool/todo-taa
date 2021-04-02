import {
  Paper,
} from '@material-ui/core';
import styles from './withMyPaperLayer.module.css';


const withMyPaperLayer = WrappedComponent => (
  <Paper className={styles.paper} elevation={3} >
    <WrappedComponent />
  </Paper>
);


export default withMyPaperLayer;
