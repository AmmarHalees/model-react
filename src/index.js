import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './containers/App/App';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import { rootReducer } from './redux/reducers';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


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
