import {
  Suspense,
  lazy,
} from 'react';

import styles from './App.module.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Loader = lazy(() => import('../Loader/Loader'));
const Menu = lazy(() => import('../Menu/Menu'));
const AboutContainer = lazy(() => import('../About/AboutContainer'));
const TodoContainer = lazy(() => import('../Todo/TodoContainer'));
const ContactsContainer = lazy(() => import('../Contacts/ContactsContainer'));

const App = () => (
  <Router>
    <div className={styles.body}>

      <div className={styles.appWrapper}>
        <Suspense fallback={<Loader />}>
          <Menu />
        </Suspense>

        <div className={styles.routeWrapper}>
          <Switch>
            <Route path='/' exact>
              <Suspense fallback={<Loader />}>
                <AboutContainer />
              </Suspense>
            </Route>

            <Route path='/todo'>
              <Suspense fallback={<Loader />}>
                <TodoContainer />
              </Suspense>
            </Route>

            <Route path='/contacts'>
              <Suspense fallback={<Loader />}>
                <ContactsContainer />
              </Suspense>
            </Route>

            <Redirect to='/' />
          </Switch>
        </div>
      </div>

    </div>
  </Router>
);

export default App;
