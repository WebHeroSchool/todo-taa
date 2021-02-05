import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const InputItem = () => <TextField
  className={ styles.indent }
  id="outlined-basic"
  fullWidth={ true }
  margin="dense"
  label="Добавить дело"
  variant="outlined"
/>;

export default InputItem;
