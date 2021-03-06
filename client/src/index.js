import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';


ReactDOM.render(
  <Provider store={createStore(
      reducers,
      compose(
        applyMiddleware(thunk),
      // ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
    )}>
    <App />
  </Provider>,
  document.getElementById('root')
);
