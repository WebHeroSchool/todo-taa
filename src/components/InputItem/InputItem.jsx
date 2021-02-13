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
  const [
    inputValue,
    setInputValue,
  ] = useState('');

  const [
    errorStatus,
    setErrorStatus,
  ] = useState(false);

  const [
    helperText,
    setHelperText,
  ] = useState(' ');

  const onButtonClick = () => {
    setInputValue('');

    if (inputValue) {
      onClickAddItem(inputValue);
      setErrorStatus(false);
      setHelperText(' ');
    } else {
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
      onChange={event => setInputValue(event.target.value.toUpperCase())}
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
