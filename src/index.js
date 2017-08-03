import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import rootReducer from './reducers';

const root = <App />;


ReactDOM.render(
  (<Provider store={ store }>
    { Root }
  </Provider>),
  document.getElementById('root')
);

registerServiceWorker();

export { rootReducer };
export default root
