import {
  connect,
} from 'react-redux';
import setInputvalue from '../../store/actions/setInputvalue';
import onClickAddItem from '../../store/actions/onClickAddItem';
import {
  TextField,
  Button,
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';

const InputItem = ({
  inputValue,
  setInputvalue,
  errorStatus,
  helperText,
  onClickAddItem,
}) => (
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
        }
      }
      onKeyDown={
        event => {
          if (event.code === 'Enter') {
            onClickAddItem(inputValue);
          }
        }
      }
    />
    <Button
      className={styles.button}
      color="primary"
      onClick={ () => onClickAddItem(inputValue) }
    >
      <PostAddIcon fontSize="default" />
    </Button>
  </div>
);

InputItem.propTypes = {
  inputValue: PropTypes.string,
  setInputvalue: PropTypes.func,
};


export default connect(
  store => ({
    inputValue: store.todos.textField.inputValue,
    errorStatus: store.todos.textField.errorStatus,
    helperText: store.todos.textField.helperText,
  }),
  {
    setInputvalue,
    onClickAddItem,
  },
)(InputItem);
