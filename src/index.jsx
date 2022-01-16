import {
  Suspense,
  lazy,
} from 'react';

import Helmet from 'react-helmet';

import {
  Provider,
} from 'react-redux';
import store from './store/store';

import './index.css';
import './fonts/fonts.css';

import ReactDOM from 'react-dom';

const App = lazy(() => import('./components/App/App'));

const meta = {
  title: 'Обо мне',
  description: 'Информация обо мне, мои контакты и репозитории на GitHub',
  image: {
    url: 'https://webheroschool.github.io/todo-taa/aboutMe.jpg',
    alt: 'networking',
    width: '1200',
    height: '628',
  },
  url: 'https://webheroschool.github.io/todo-taa/#/',
  type: 'website',
  id: '488242212639151',
};


ReactDOM.render(
  <>
    <Helmet>
      <title>{ meta.title }</title>
      <meta name="description" content={ meta.description }/>
      <meta property="og:title" content={ meta.title }/>
      <meta property="og:image" content={ meta.image.url }/>
      <meta property="og:image:alt" content={ meta.image.alt }/>
      <meta property="og:image:width" content={ meta.image.width }/>
      <meta property="og:image:height" content={ meta.image.height }/>
      <meta property="og:url" content={ meta.url } />
      <meta property="og:type" content={ meta.type } />
      <meta property="og:description" content={ meta.description } />
      <meta property="fb:app_id" content={ meta.id } />
    </Helmet>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <App/>
      </Provider>
    </Suspense>
  </>
  , document.getElementById('root'));
