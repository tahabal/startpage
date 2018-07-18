import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/vendor/bootstrap/bootstrap.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
