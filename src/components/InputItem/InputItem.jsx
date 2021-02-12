import React from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    errorStatus: false,
    helperText: ' ',
  }

  onButtonClick = () => {
    this.setState({
      inputValue: '',
      errorStatus: false,
      helperText: ' ',
    });

    if (this.state.inputValue) {
      this.props.onClickAddItem(this.state.inputValue);
    } else {
      this.setState({
        errorStatus: true,
        helperText: 'Нузно заполнить поле',
      });
    }
  }

  pressEnterToSubmit = event => {
    if (event.code === 'Enter') {
      this.onButtonClick();
    }
  }

  render () {
    return (<div className={styles.wrapper}>
      <TextField
        error={this.state.errorStatus}
        helperText={this.state.helperText}
        className={styles.textField}
        fullWidth={true}
        id="outlined-basic"
        label="Добавить дело"
        margin="dense"
        value={this.state.inputValue}
        variant="outlined"
        onChange={event => this.setState({
          inputValue: event.target.value.toUpperCase(),
        })}
        onKeyDown={event => this.pressEnterToSubmit(event)}
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

InputItem.propTypes = {
  className: PropTypes.string,
};

export default InputItem;
