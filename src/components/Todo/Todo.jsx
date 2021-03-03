import styles from './Todo.module.css';

import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import {
  Paper,
  Divider,
} from '@material-ui/core';

import TodoItem from '../TodoItem/TodoItem';
import withItemList from '../hoc/withItemList/withItemList';

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
)(withItemList(TodoItem));

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
