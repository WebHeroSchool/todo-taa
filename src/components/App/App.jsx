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
    count: 6,
  }

  /* eslint-disable no-console */
  onClickIsDone = () => {
    this.setState(() => ({
      isDone: true,
    }));
  }

  onClickFooter = () => {
    this.setState(state => ({
      count: state.count - 1,
    }));
  }

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
        <Footer count={ this.state.count } onClickFooter={this.onClickFooter} />
      </div>
    </Paper>);
  }
}

export default App;
