import {
  useState,
} from 'react';
import styles from './FilterListItems.module.css';
import {
  ToggleButton,
  ToggleButtonGroup,
} from '@material-ui/lab';


const FilterListItems = props => {
  const [
    alignment,
    setAlignment,
  ] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  return (
    <div className={styles.filterWrapper}>
      <ToggleButtonGroup
        size="small"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton
          value="left"
          aria-label="left aligned"
          className={styles.buttonText}
          onClick={() => props.setAllFilter()}
        >
          Все
        </ToggleButton>
        <ToggleButton
          value="center"
          aria-label="centered"
          className={styles.buttonText}
          onClick={() => props.setActiveFilter()}
        >
          Активные
        </ToggleButton>
        <ToggleButton
          value="right"
          aria-label="right aligned"
          className={styles.buttonText}
          onClick={() => props.setCompletedFilter()}
        >
          Выполненные
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};


export default FilterListItems;
