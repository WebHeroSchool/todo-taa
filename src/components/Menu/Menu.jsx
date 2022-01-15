import {
  Suspense,
  lazy,
  useState,
} from 'react';

import styles from './Menu.module.css';


const Paper = lazy(() => import('@material-ui/core/Paper'));
const MenuList = lazy(() => import('@material-ui/core/MenuList'));
const Divider = lazy(() => import('@material-ui/core/Divider'));

const Loader = lazy(() => import('../Loader/Loader'));
const AppLink = lazy(() => import('../AppLink/AppLink'));
const Label = lazy(() => import('../Label/Label'));


const Menu = () => {
  const [
    selectedIndex,
    setSelectedIndex,
  ] = useState(0);


  return (
    <Paper className={styles.menu} elevation={3} >
      <Suspense fallback={<Loader />}>
        <MenuList>
          <nav className={ styles.menuList } role="menuitem">
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

        <Divider className={ styles.divider } />

        <Label />
      </Suspense>
    </Paper>
  );
};


export default Menu;
