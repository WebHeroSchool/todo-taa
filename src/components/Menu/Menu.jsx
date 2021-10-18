import styles from './Menu.module.css';

import {
  React,
  useState,
} from 'react';
import {
  Paper,
  MenuList,
  Divider,
} from '@material-ui/core';

import AppLink from '../AppLink/AppLink';
import Label from '../Label/Label';


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

        </nav>
      </MenuList>

      <Divider />

      <Label />
    </Paper>
  );
};


export default Menu;
