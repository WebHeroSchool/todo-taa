import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Route,
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

        <Route path='/' exact component={AboutContainer} />
        <Route path='/todo' component={TodoContainer} />
        <Route path='/contacts' component={ContactsContainer} />

      </div>

    </div>
  </Router>
);

export default App;
