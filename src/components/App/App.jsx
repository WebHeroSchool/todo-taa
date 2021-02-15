import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Menu from '../Menu/Menu';
import About from '../About/About';
import Todo from '../Todo/Todo';


const App = () => (
  <Router>
    <div className={styles.body}>

      <div className={styles.appWrapper}>

        <Menu />

        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Todo} />

      </div>

    </div>
  </Router>
);

export default App;
