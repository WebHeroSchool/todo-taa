import styles from './Menu.module.css';
import {
  Paper,
  MenuList,
} from '@material-ui/core';
import {
  Link,
} from 'react-router-dom';

import MyMenuItem from '../MyMenuItem/MyMenuItem';

const Menu = () => {
  const menuItems = [
    {
      value: 'Обо мне',
      path: '/',
    },
    {
      value: 'Дела',
      path: '/todo',
    },
    {
      value: 'Контакты',
      path: '/contacts',
    },
  ];


  return (
    <Paper className={styles.menu} elevation={3} >
      <MenuList>

        {
          menuItems.map(menuItem => (
            <Link
              key={menuItem.value.toString()}
              to={menuItem.path}
            >
              <MyMenuItem value={menuItem.value} />
            </Link>
          ))
        }

      </MenuList>
    </Paper>
  );
};

export default Menu;
