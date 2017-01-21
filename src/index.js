import './css/index.css';

import ReactDOM from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PouchDB from 'pouchdb';
import App from './components/App.jsx';
import {
  Router, Route, browserHistory
}
from 'react-router';

injectTapEventPlugin();
ReactDOM.render( < App / > , document.getElementById('app'));
