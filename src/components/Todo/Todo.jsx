import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import {
  Paper,
  Divider,
} from '@material-ui/core';
import withStore from '../hoc/withStore';

const title = (<h1 className={ styles.title }>TO DO:</h1>);
const ItemListWithStore = withStore(ItemList);

const Todo = () => (
  <Paper className={styles.paper} elevation={3} >
    <div className={styles.indent}>
      {title}
      <InputItem />
      <ItemListWithStore />
    </div>
    <Divider />
    <div className={styles.indent}>
      <Footer />
    </div>
  </Paper>
);


export default Todo;
