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
    state,
    setState,
  ] = useState(
    {
      textField: {
        inputValue: '',
        errorStatus: false,
        helperText: ' ',
      },
    }
  );

  const onButtonClick = () => {
    setState(
      {
        textField: {
          inputValue: '',
          errorStatus: false,
          helperText: ' ',
        },
      }
    );

    if (state.textField.inputValue) {
      onClickAddItem(state.textField.inputValue);
    } else {
      setState(
        {
          textField: {
            inputValue: '',
            errorStatus: true,
            helperText: 'Нужно заполнить поле',
          },
        }
      );
    }
  };

  const pressEnterToSubmit = event => {
    if (event.code === 'Enter') {
      onButtonClick();
    }
  };

  return (<div className={styles.wrapper}>
    <TextField
      error={state.textField.errorStatus}
      helperText={state.textField.helperText}
      className={styles.textField}
      fullWidth={true}
      id="outlined-basic"
      label="Добавить дело"
      margin="dense"
      value={state.textField.inputValue}
      variant="outlined"
      onChange={
        event => {
          const newState = {
            textField: {
              inputValue: event.target.value.toUpperCase(),
            },
          };

          setState(newState);
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
