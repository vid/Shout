import './css/index.css';

import ReactDOM from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App.jsx';
import {BrowserRouter} from 'react-router-dom';

injectTapEventPlugin();
ReactDOM.render((
  <BrowserRouter>
    < App / >
  </BrowserRouter>
), document.getElementById('app'));
