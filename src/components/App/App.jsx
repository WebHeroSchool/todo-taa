import styles from './App.module.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Menu from '../Menu/Menu';
import AboutContainer from '../About/AboutContainer';
import TodoContainer from '../Todo/TodoContainer';
import ContactsContainer from '../Contacts/ContactsContainer';


const App = () => (
  <Router>
    <div className={styles.body}>

      <div className={styles.appWrapper}>

        <Menu />

        <div className={styles.routeWrapper}>
          <Switch>
            <Route path='/' exact component={AboutContainer} />
            <Route path='/todo' component={TodoContainer} />
            <Route path='/contacts' component={ContactsContainer} />
            <Redirect to='/' />
          </Switch>
        </div>

      </div>

    </div>
  </Router>
);

export default App;
