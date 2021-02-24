import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import {
  Paper,
  Divider,
} from '@material-ui/core';

const title = (<h1 className={ styles.title }>TO DO:</h1>);


const Todo = () => (
  <Paper className={styles.paper} elevation={3} >
    <div className={styles.indent}>
      {title}
      <InputItem />
      <ItemList />
    </div>
    <Divider />
    <div className={styles.indent}>
      <Footer />
    </div>
  </Paper>
);


export default Todo;
