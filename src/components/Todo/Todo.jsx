import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import {
  Paper,
  Divider,
} from '@material-ui/core';

import {
  connect,
} from 'react-redux';
import createItem from '../../store/actions/createItem';
import updateItem from '../../store/actions/updateItem';
import deleteItem from '../../store/actions/deleteItem';


const title = (<h1 className={ styles.title }>TO DO:</h1>);

const InputItemWithStore = connect(
  null,
  {
    createItem,
  },
)(InputItem);

const ItemListWithStore = connect(
  state => ({
    items: state.todos.items,
  }),
  {
    updateItem,
    deleteItem,
  },
)(ItemList);

const FooterWithStore = connect(
  state => ({
    count: state.todos.count,
  }),
)(Footer);


const Todo = () => (
  <Paper className={styles.paper} elevation={3} >
    <div className={styles.indent}>
      {title}
      <InputItemWithStore />
      <ItemListWithStore />
    </div>
    <Divider />
    <div className={styles.indent}>
      <FooterWithStore />
    </div>
  </Paper>
);


export default Todo;
