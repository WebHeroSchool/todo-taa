import {
  Suspense,
  lazy,
} from 'react';

import {
  Provider,
} from 'react-redux';
import store from './store/store';

import './index.css';
import './fonts/fonts.css';

import ReactDOM from 'react-dom';

const App = lazy(() => import('./components/App/App'));


ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <App/>
    </Provider>
  </Suspense>
  , document.getElementById('root'));
