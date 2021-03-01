import {
  TextField,
  Button,
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';
import {
  useState,
} from 'react';


const InputItem = ({
  createItem,
}) => {
  const [
    inputValue,
    setInputvalue,
  ] = useState('');

  const [
    helperText,
    setHelperText,
  ] = useState(' ');

  const [
    errorStatus,
    setErrorStatus,
  ] = useState(false);

  const addErrorStatus = () => {
    setErrorStatus(true);
    setHelperText('Нужно заполнить поле');
  };

  const removeErrorStatus = () => {
    setErrorStatus(false);
    setHelperText(' ');
  };

  const submitData = () => {
    createItem(inputValue);
    setInputvalue('');
  };


  return (
    <div className={styles.wrapper}>
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
            removeErrorStatus();
          }
        }
        onKeyDown={
          event => {
            if (event.code === 'Enter') {
              if (inputValue.trim()) {
                submitData();
              } else {
                addErrorStatus();
              }
            }
          }
        }
      />
      <Button
        className={styles.button}
        color="primary"
        onClick={
          () => {
            if (inputValue.trim()) {
              submitData();
            } else {
              addErrorStatus();
            }
          }
        }
      >
        <PostAddIcon fontSize="default" />
      </Button>
    </div>
  );
};

InputItem.propTypes = {
  inputValue: PropTypes.string,
  setInputvalue: PropTypes.func,
};


export default InputItem;
