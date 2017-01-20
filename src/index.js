import './css/index.css';

import ReactDOM from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PouchDB from 'pouchdb';
import AppContainer from './components/AppContainer.jsx';
import {
  Router, Route, browserHistory
}
from 'react-router';

injectTapEventPlugin();
ReactDOM.render( < AppContainer / > , document.getElementById('app'));
