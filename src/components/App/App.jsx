import store from '../../store/store';
import {
  Provider,
} from 'react-redux';
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Menu from '../Menu/Menu';
import About from '../About/About';
import Todo from '../Todo/Todo';
import Contacts from '../Contacts/Contacts';


const App = () => (
  <Provider store={store}>
    <Router>
      <div className={styles.body}>

        <div className={styles.appWrapper}>

          <Menu />
          <Route path='/' exact component={About} />
          <Route path='/todo' component={Todo} />
          <Route path='/contacts' component={Contacts} />

        </div>

      </div>
    </Router>
  </Provider>
);

export default App;
