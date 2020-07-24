import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './containers/App/App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import configureStore from './redux/store';

const store = configureStore({});

ReactDOM.render(
  <React.StrictMode>

    <ErrorBoundary>

      <Provider store={store}>

        <HashRouter>

          <App />

        </HashRouter>

      </Provider>

    </ErrorBoundary>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
