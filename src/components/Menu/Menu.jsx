import styles from './Menu.module.css';

import {
  React,
  useState,
} from 'react';
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
            to="/"
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            primary="Обо мне"
          />

          <AppLink
            to="/todo"
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            primary="Дела"
          />

          <AppLink
            to="/contacts"
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            primary="Контакты"
          />

        </nav>
      </MenuList>
    </Paper>
  );
};


export default Menu;
