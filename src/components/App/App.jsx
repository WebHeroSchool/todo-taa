import React from 'react';
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

class App extends React.Component {
  state = {
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

  onClickIsDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = {
        ...item,
      };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({
      items: newItemList,
    });
  }

  onClickDelete = id => {
    const newItemList = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: newItemList,
    });
  }

  onClickAddItem = value => {
    this.setState({
      items: [
        {
          value,
          isDone: false,
          id: this.state.count + 1,
        },
        ...this.state.items,
      ],
      count: this.state.count + 1,
    });
  }

  render () {
    return (<Paper className={styles.paper} elevation={3} >
      <div className={styles.indent}>
        {title}
        <InputItem onClickAddItem={this.onClickAddItem} />
        <ItemList
          items={this.state.items}
          onClickIsDone={this.onClickIsDone}
          onClickDelete={this.onClickDelete}
        />
      </div>
      <Divider />
      <div className={styles.indent}>
        <Footer count={this.state.count} />
      </div>
    </Paper>);
  }
}

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
