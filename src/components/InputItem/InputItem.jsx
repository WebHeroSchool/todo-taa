import {
  React,
  useState,
} from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';

const InputItem = ({
  onClickAddItem,
}) => {
  const initialState = {
    textField: {
      inputValue: '',
      errorStatus: false,
      helperText: ' ',
    },
  };

  const [
    inputValue,
    setInputvalue,
  ] = useState(initialState.textField.inputValue);

  const [
    errorStatus,
    setErrorStatus,
  ] = useState(initialState.textField.errorStatus);

  const [
    helperText,
    setHelperText,
  ] = useState(initialState.textField.helperText);

  const onButtonClick = () => {
    setInputvalue('');
    setErrorStatus(false);
    setHelperText(' ');

    if (inputValue) {
      onClickAddItem(inputValue);
    } else {
      setInputvalue('');
      setErrorStatus(true);
      setHelperText('Нужно заполнить поле');
    }
  };

  const pressEnterToSubmit = event => {
    if (event.code === 'Enter') {
      onButtonClick();
    }
  };

  return (<div className={styles.wrapper}>
    <TextField
      error={errorStatus}
      helperText={helperText}
      className={styles.textField}
      fullWidth={true}
      id="outlined-basic"
      label="Добавить дело"
      margin="dense"
      value={inputValue}
      variant="outlined"
      onChange={
        event => {
          setInputvalue(event.target.value.toUpperCase());
        }
      }
      onKeyDown={event => pressEnterToSubmit(event)}
    />
    <Button
      className={styles.button}
      color="primary"
      onClick={onButtonClick}
    >
      <PostAddIcon fontSize="default" />
    </Button>
  </div>);
};

InputItem.propTypes = {
  className: PropTypes.string,
};

export default InputItem;
