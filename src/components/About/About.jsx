import {
  Paper,
} from '@material-ui/core';
import styles from './About.module.css';

const title = (<h1 className={ styles.title }>Обо мне:</h1>);

const About = () => (
  <Paper className={styles.paper} elevation={3} >
    <div className={styles.indent}>
      {title}
    </div>
  </Paper>
);

export default About;
