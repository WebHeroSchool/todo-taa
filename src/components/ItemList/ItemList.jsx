import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';
import witCheckboxAndDeleteBtn from '../hoc/witCheckboxAndDeleteBtn';
import {
  Button,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

const ItemWitCheckboxAndDeleteBtn = witCheckboxAndDeleteBtn(
  Item,
  Button,
  Checkbox,
  FormControlLabel
);

const ItemList = props => (
  <ul className={ styles.list }> {
    props.items.map(
      item => (
        <li key={item.id.toString()}>
          <ItemWitCheckboxAndDeleteBtn {...item} {...props} />
        </li>
      )
    )
  } </ul>
);

ItemList.propTypes = {
  items: PropTypes.array,
  onClickIsDone: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default ItemList;
