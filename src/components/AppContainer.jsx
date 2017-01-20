import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'

//import other components & pages

import App from './App.jsx';
import Search from './Search.jsx';
import SearchInputs from './SearchInputs.jsx';
import Footer from './Footer.jsx';
import LeftMenu from './LeftMenu.jsx';
import ClinicPage from './ClinicPage.jsx';
import AddResource from './AddResource.jsx';
import About from './About.jsx';

export default class AppContainer extends React.Component  {
  render () {
    return (
      <Router history={browserHistory}>
          <Route path='/' component={App} />
      </Router>
    )
  }
}
