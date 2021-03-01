import {
  React,
  useState,
} from 'react';
import styles from './Menu.module.css';
import {
  Paper,
  MenuList,
} from '@material-ui/core';

import AppLink from '../AppLink/AppLink';


const Menu = () => {
  const [
    selectedIndex,
    setSelectedIndex,
  ] = useState(0);


  return (
    <Paper className={styles.menu} elevation={3} >
      <MenuList>
        <nav>

          <AppLink
            className={styles.link}
            to="/"
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            selected={1}
            primary="Обо мне"
          />

          <AppLink
            className={styles.link}
            to="/todo"
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            selected={2}
            primary="Дела"
          />

          <AppLink
            className={styles.link}
            to="/contacts"
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            selected={3}
            primary="Контакты"
          />

        </nav>
      </MenuList>
    </Paper>
  );
};


export default Menu;
