import {
  TextField,
  Button,
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';


const InputItem = props => (
  <div className={styles.wrapper}>
    <TextField
      error={ props.errorStatus }
      helperText={ props.helperText }
      className={styles.textField}
      fullWidth={true}
      id="outlined-basic"
      label="Добавить дело"
      margin="dense"
      value={ props.inputValue }
      variant="outlined"
      onChange={ props.onChangeTextField }
      onKeyDown={props.onKeyDownTextField}
    />
    <Button
      className={styles.button}
      color="primary"
      onClick={ props.onClickButton }
    >
      <PostAddIcon fontSize="default" />
    </Button>
  </div>
);

InputItem.propTypes = {
  inputValue: PropTypes.string,
  setInputvalue: PropTypes.func,
};


export default InputItem;
