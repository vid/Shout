/* jslint node: true, esnext: true */
'use strict';

/**

The main component with the app's actions and 'store.'

**/

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import {resources} from '../lib/resources.js';

import Search from './Search.jsx';
import Result from './Result.jsx';
import Footer from './Footer.jsx';
import LeftMenu from './LeftMenu.jsx';
import Paper from 'material-ui/Paper';

export default class App extends React.Component {
  constructor() {
    super();
    // this component's state acts as the overall store for now
    this.state = {
        filteredResources: resources,
        showReply: false,
    };
  }
  componentDidMount () {
    this.displaySearch();
  }
  // these are the app's actions, passed to and called by other components
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

  onClick(e){
      e.preventDefault();
      this.setState({showReply: !this.state.showReply})
  }

  // end of actions
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div id='wrapper'>
            <div id='menu'>
             {this.state.showReply && < LeftMenu / >}
             </div>
          <div id='header'>
            <AppBar onLeftIconButtonTouchTap={this.onClick.bind(this)} title="Shout" />
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
