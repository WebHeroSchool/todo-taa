import {
  Provider,
} from 'react-redux';
import store from './store/store';

import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));
