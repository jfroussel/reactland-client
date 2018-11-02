import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, reduxDevTools)}>
    <div>
      <App />
    </div>
  </Provider>, document.getElementById('root')
)

serviceWorker.unregister();
