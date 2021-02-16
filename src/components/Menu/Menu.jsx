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
        <nav>

          <Link className={styles.link} to='/'>
            <ListItem
              className={styles['Mui-selected']}
              button
              selected={selectedIndex === 1}
              onClick={event => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Обо мне" />
            </ListItem>
          </Link>

          <Link className={styles.link} to='/todo'>
            <ListItem
              button
              selected={selectedIndex === 2}
              onClick={event => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Дела" />
            </ListItem>
          </Link>

          <Link className={styles.link} to='/contacts'>
            <ListItem
              button
              selected={selectedIndex === 3}
              onClick={event => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Контакты" />
            </ListItem>
          </Link>

        </nav>
      </MenuList>
    </Paper>
  );
};


export default Menu;
