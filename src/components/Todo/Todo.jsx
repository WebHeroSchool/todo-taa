import store from '../../store/store';
import {
  React,
  useState,
} from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import {
  Paper,
  Divider,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const title = (<h1 className={ styles.title }>TO DO:</h1>);


const Todo = () => {
  // const initialState = {
  //   items: [
  //     {
  //       value: 'Разобраться с пропсами',
  //       isDone: false,
  //       id: 1,
  //     },
  //     {
  //       value: 'Сделать комит',
  //       isDone: true,
  //       id: 2,
  //     },
  //     {
  //       value: 'Сдать задание на проверку',
  //       isDone: false,
  //       id: 3,
  //     },
  //   ],
  //   count: 3,
  // };

  const [
    items,
    setItems,
  ] = useState(store.getState().items);

  const [
    count,
    setCount,
  ] = useState(store.getState().count);

  const onClickIsDone = id => {
    const newItemList = items.map(item => {
      const newItem = {
        ...item,
      };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    setItems(newItemList);
  };

  // const onClickDelete = id => {
  //   const newItemList = items.filter(item => item.id !== id);

  //   setItems(newItemList);
  //   setCount(count => count - 1);
  // };

  const onClickAddItem = value => {
    const newItems = [
      {
        value,
        isDone: false,
        id: count + 1,
      },
      ...items,
    ];

    setItems(newItems);
    setCount(count => count + 1);
  };


  return (
    <Paper className={styles.paper} elevation={3} >
      <div className={styles.indent}>
        {title}
        <InputItem onClickAddItem={onClickAddItem} />
        <ItemList
          items={items}
          onClickIsDone={onClickIsDone}
          onClickDelete={onClickDelete}
        />
      </div>
      <Divider />
      <div className={styles.indent}>
        <Footer count={count} />
      </div>
    </Paper>
  );
};

Todo.propTypes = {
  className: PropTypes.string,
};

InputItem.propTypes = {
  onClickAddItem: PropTypes.func,
};

ItemList.propTypes = {
  items: PropTypes.array,
};

export default Todo;
