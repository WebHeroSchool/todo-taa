// import styles from './Item.module.css';
// import {
//   Button,
//   Checkbox,
//   FormControlLabel,
// } from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import PropTypes from 'prop-types';


const witCheckboxAndDeleteBtn = (
  Component,
  Button,
  Checkbox,
  FormControlLabel,
) => props => (
  <div>
    <Component {...props} >
      <FormControlLabel
        control={
          <Checkbox
            checked={props.isDone}
            name={`checked ${props.value.toString()}`}
          />
        }
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.deleteItem(props.id)}
      >
        <DeleteForeverTwoToneIcon fontSize="default" />
      </Button>
    </Component>
  </div>
);

witCheckboxAndDeleteBtn.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  isDone: PropTypes.bool,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default witCheckboxAndDeleteBtn;
