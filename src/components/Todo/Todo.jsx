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
import onClickAddItem from '../../store/actions/onClickAddItem';
import onClickIsDone from '../../store/actions/onClickIsDone';
import onClickDelete from '../../store/actions/onClickDelete';


const title = (<h1 className={ styles.title }>TO DO:</h1>);

const InputItemWithStore = connect(
  null,
  {
    onClickAddItem,
  },
)(InputItem);

const ItemListWithStore = connect(
  state => ({
    items: state.todos.items,
  }),
  {
    onClickIsDone,
    onClickDelete,
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
