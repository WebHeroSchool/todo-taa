import styles from './Todo.module.css';

import InputItemContainer from '../InputItem/InputItemContainer';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import {
  Paper,
  Divider,
} from '@material-ui/core';


const title = (<h1 className={ styles.title }>TO DO:</h1>);

const Todo = props => (
  <Paper className={styles.paper} elevation={3} >
    <div className={styles.indent}>
      {title}
      <InputItemContainer />
      <ItemList {...props} />
    </div>
    <Divider />
    <div className={styles.indent}>
      <Footer count={ props.count } />
    </div>
  </Paper>
);


export default Todo;
