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
const TodoItemWithItemList = withItemList(TodoItem);

const Todo = props => (
  <Paper className={styles.paper} elevation={3} >
    <div className={styles.indent}>
      {title}
      <InputItem createItem={ props.createItem } />
      <TodoItemWithItemList
        items={ props.items }
        updateItem={ props.updateItem }
        deleteItem={ props.deleteItem }
      />
    </div>
    <Divider />
    <div className={styles.indent}>
      <Footer count={ props.count } />
    </div>
  </Paper>
);


export default connect(
  state => ({
    items: state.todos.items,
    count: state.todos.count,
  }),
  {
    createItem,
    updateItem,
    deleteItem,
  },
)(Todo);
