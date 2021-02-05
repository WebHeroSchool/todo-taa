import classnames from 'classnames';
import styles from './Item.module.css';
import { Button, FormControlLabel, Checkbox } from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

const Item = ({ value, isDone }) => {
  return (<div className = {styles.itemWrap}>
    <span className = {
    classnames({
      [styles.item]: true,
      [styles.done]: isDone,
    })
  }>
      <FormControlLabel
        control={<Checkbox name={"checked" + value.toString()} />}
        label={ value }
      />
      <Button className={styles.deleteBtn} variant="contained" color="secondary">
        <DeleteForeverTwoToneIcon color="default" fontSize="default" />
      </Button>
    </span>
  </div>);
}

export default Item;
