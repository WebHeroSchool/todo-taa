import {
  React,
  useState,
} from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import {
  Paper,
  Divider,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const title = (<h1 className={ styles.title }>TO DO:</h1>);

const App = () => {
  const [
    state,
    setState,
  ] = useState(
    {
      items: [
        {
          value: 'Разобраться с пропсами',
          isDone: false,
          id: 1,
        },
        {
          value: 'Сделать комит',
          isDone: true,
          id: 2,
        },
        {
          value: 'Сдать задание на проверку',
          isDone: false,
          id: 3,
        },
      ],
      count: 3,
    }
  );

  const onClickIsDone = id => {
    const newItemList = state.items.map(item => {
      const newItem = {
        ...item,
      };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    const newState = {
      items: newItemList,
      count: state.count + 1,
    };

    setState(newState);
  };

  const onClickDelete = id => {
    const newItemList = state.items.filter(item => item.id !== id);

    const newState = {
      items: newItemList,
      count: state.count + 1,
    };

    setState(newState);
  };

  const onClickAddItem = value => {
    const newState = {
      items: [
        {
          value,
          isDone: false,
          id: state.count + 1,
        },
        ...state.items,
      ],
      count: state.count + 1,
    };

    setState(newState);
  };

  return (<Paper className={styles.paper} elevation={3} >
    <div className={styles.indent}>
      {title}
      <InputItem onClickAddItem={onClickAddItem} />
      <ItemList
        items={state.items}
        onClickIsDone={onClickIsDone}
        onClickDelete={onClickDelete}
      />
    </div>
    <Divider />
    <div className={styles.indent}>
      <Footer count={state.count} />
    </div>
  </Paper>);
};

App.propTypes = {
  className: PropTypes.string,
};

InputItem.propTypes = {
  onClickAddItem: PropTypes.func,
};

ItemList.propTypes = {
  items: PropTypes.array,
};

export default App;
