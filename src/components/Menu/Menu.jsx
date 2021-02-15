import {
  React,
  useState,
} from 'react';
import {
  Link,
} from 'react-router-dom';
import styles from './Menu.module.css';
import {
  Paper,
  MenuList,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const Menu = () => {
  const [
    selectedIndex,
    setSelectedIndex,
  ] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  return (
    <Paper className={styles.menu} elevation={3} >
      <MenuList>

        <Link to='/'>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
            <ListItemText primary="Обо мне" />
          </ListItem>
        </Link>

        <Link to='/todo'>
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
          >
            <ListItemText primary="Дела" />
          </ListItem>
        </Link>

        <Link to='/contacts'>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}
          >
            <ListItemText primary="Контакты" />
          </ListItem>
        </Link>

      </MenuList>
    </Paper>
  );
};


export default Menu;
