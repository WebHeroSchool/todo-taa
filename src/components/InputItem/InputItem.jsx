import {
  TextField,
  Button,
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import styles from './InputItem.module.css';


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
      title="Добавить задачу"
    >
      <PostAddIcon fontSize="medium" />
    </Button>
  </div>
);


export default InputItem;
