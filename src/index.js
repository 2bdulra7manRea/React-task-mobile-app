import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={'loading...'} >
          <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

