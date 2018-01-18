import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import IndexPage from './views/indexPage/indexPage';

 ReactDOM.render(<App />, document.getElementById('root')); 
/* ReactDOM.render(<IndexPage />, document.getElementById('root')); */
registerServiceWorker();
