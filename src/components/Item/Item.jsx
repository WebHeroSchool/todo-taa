import classnames from 'classnames';
import styles from './Item.module.css';
import {
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import PropTypes from 'prop-types';


const Item = props => (
  <div className = {styles.itemWrap}>
    <span className = {
      classnames({
        [styles.item]: true,
        [styles.done]: props.isDone,
      })
    }>
      <FormControlLabel
        control={
          <Checkbox
            onChange={() => props.onClickIsDone(props.id)}
            checked={props.isDone}
            name={`checked ${props.value.toString()}`}
          />
        }
        label={ props.value }
      />
      <Button
        className={styles.deleteBtn}
        variant="contained"
        color="secondary"
        onClick={() => props.onClickDelete(props.id)}
      >
        <DeleteForeverTwoToneIcon fontSize="default" />
      </Button>
    </span>
  </div>
);

Item.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  isDone: PropTypes.bool,
  onClickIsDone: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default Item;
