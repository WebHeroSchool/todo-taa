// import {
//   Paper,
// } from '@material-ui/core';
import styles from './Contacts.module.css';

import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';
import withIndent from '../hoc/withIndent/withIndent';


const title = () => (<h1 className={ styles.title }>Контакты:</h1>);

const Test = withIndent(title);
const Test2 = withMyPaperLayer(Test);

// const Contacts = () => (
//   <Paper className={styles.paper} elevation={3} >
//     <div className={styles.indent}>
//       {title}
//     </div>
//   </Paper>
// );


const Contacts = () => Test2;


export default Contacts;
