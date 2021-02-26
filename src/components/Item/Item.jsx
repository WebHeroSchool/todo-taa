import onClickIsDone from '../../store/actions/onClickIsDone';
import onClickDelete from '../../store/actions/onClickDelete';
import {
  connect,
} from 'react-redux';
import classnames from 'classnames';
import styles from './Item.module.css';
import {
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import PropTypes from 'prop-types';


const Item = ({
  id,
  value,
  isDone,
  onClickIsDone,
  onClickDelete,
}) => (
  <div className = {styles.itemWrap}>
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
        className={styles.deleteBtn}
        variant="contained"
        color="secondary"
        onClick={() => onClickDelete(id)}
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
};

export default connect(
  null,
  {
    onClickIsDone,
    onClickDelete,
  },
)(Item);
