import React from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
  }

  onButtonClick = () => {
    this.setState({
      inputValue: '',
    });

    this.props.onClickAddItem(this.state.inputValue);
  }

  render () {
    return (<div className={styles.wrapper}>
      <TextField
        className={styles.textField}
        fullWidth={true}
        id="outlined-basic"
        label="Добавить дело"
        margin="dense"
        value={this.state.inputValue}
        variant="outlined"
        onChange={event => this.setState({
          inputValue: event.target.value,
        })}
      />
      <Button
        className={styles.button}
        color="primary"
        onClick={this.onButtonClick}
      >
        <PostAddIcon fontSize="default" />
      </Button>
    </div>);
  }
}

export default InputItem;
