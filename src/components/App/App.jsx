import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import {
  Paper,
  Divider,
} from '@material-ui/core';

const title = (<h1 className={ styles.title }>TO DO:</h1>);

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Разобраться с пропсами',
        isDone: false,
      },
      {
        value: 'Сделать комит',
        isDone: true,
      },
      {
        value: 'Сдать задание на проверку',
        isDone: false,
      },
    ],
  }

  /* eslint-disable no-console */
  onClickIsDone = isDone => console.log(isDone);

  render () {
    return (<Paper className={ styles.paper } elevation={3} >
      <div className={ styles.indent }>
        { title }
        <InputItem />
        <ItemList
          items={ this.state.items }
          onClickIsDone={this.onClickIsDone}
        />
      </div>
      <Divider />
      <div className={ styles.indent }>
        <Footer count='3'/>
      </div>
    </Paper>);
  }
}

export default App;
