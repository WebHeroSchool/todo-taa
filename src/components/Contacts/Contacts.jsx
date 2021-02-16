import {
  Paper,
} from '@material-ui/core';
import styles from './Contacts.module.css';

const title = (<h1 className={ styles.title }>Контакты:</h1>);

const Contacts = () => (
  <Paper className={styles.paper} elevation={3} >
    <div className={styles.indent}>
      {title}
    </div>
  </Paper>
);

export default Contacts;
