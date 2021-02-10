import classnames from 'classnames';
import styles from './Item.module.css';
import {
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

const transition = {
  transition: 'opacity .4s ease-out',
};

const Item = ({
  id,
  value,
  isDone,
  onClickIsDone,
  onClickDelete,
}) => (<div className = {styles.itemWrap}>
  <span className = {
    classnames({
      [styles.item]: true,
      [styles.done]: isDone,
    })
  }>
    <FormControlLabel
      control={
        <Checkbox
          onChange={() => onClickIsDone(id)}
          checked={isDone}
          name={`checked ${value.toString()}`}
        />
      }
      label={ value }
    />
    <Button
      style={transition}
      className={styles.deleteBtn}
      variant="contained"
      color="secondary"
      onClick={() => onClickDelete(id)}
    >
      <DeleteForeverTwoToneIcon fontSize="default" />
    </Button>
  </span>
</div>);

export default Item;
