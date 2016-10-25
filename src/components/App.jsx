/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import {resources} from '../lib/resources.js';

import Search from './Search.jsx';
import Result from './Result.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredResources: resources
    };
  }
  componentDidMount () {
    this.displaySearch();
  }
  displayResult (result) {
    this.setState({screen: <Result displaySearch={(result) => this.displaySearch()} result={result} />});
  }
  displaySearch () {
    this.setState({screen: <Search container={this.refs.content} footer={this.refs.footer} displayResult={(result) => this.displayResult(result)} filterResources={(string) => this.filterResources(string)} getFilteredResources={() => this.state.filteredResources} />});
  }
  filterResources (string) {
    if (!string || string.length < 1) {
      this.setState({filteredResources: resources});
      return;
    }
    const filteredResources = resources.filter(resource => resource.name.toLowerCase().indexOf(string.toLowerCase()) > -1);
    this.setState({filteredResources});
  }
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div id='wrapper'>
          <div id='header'>
            <AppBar onLeftIconButtonTouchTap={console.log} title="Shout" />
          </div>
          <div ref='content' id='content'>
          <CSSTransitionGroup transitionName='push' transitionEnterTimeout={ 300 } transitionLeaveTimeout={ 300 }>
            {this.state.screen}
          </CSSTransitionGroup>
          </div>
          <div ref='footer' id='footer'>
            <Footer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
