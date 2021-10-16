import FilterListItemsContainer from
  '../FilterListItems/FilterListItemsContainer';
import {
  Button,
} from '@material-ui/core';
import styles from './Footer.module.css';

const Footer = ({
  count,
  ...props
}) => (
  <div className={ styles.footer }>
    Кол-во дел: { count ? count : 0 }
    <FilterListItemsContainer />
    <Button
      variant="outlined"
      color="secondary"
      size="small"
      onClick={ () => props.onClearCompleted() }
    >
      <span className={ styles.buttonText }>Очистить выполненные</span>
    </Button>
  </div>
);


export default Footer;
