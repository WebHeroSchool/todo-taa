import styles from './Todo.module.css';

import InputItemContainer from '../InputItem/InputItemContainer';
import ItemListContainer from '../ItemList/ItemListContainer';
import FooterContainer from '../Footer/FooterContainer';
import {
  Paper,
  Divider,
} from '@material-ui/core';


const title = (<h1 className={ styles.title }>TO DO:</h1>);

const Todo = () => (
  <Paper className={styles.paper} elevation={3} >
    <div className={styles.indent}>
      {title}
      <InputItemContainer />
      <ItemListContainer />
    </div>
    <Divider />
    <div className={styles.indent}>
      <FooterContainer />
    </div>
  </Paper>
);


export default Todo;
