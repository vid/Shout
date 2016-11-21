/**

The main component with the app's actions and 'store.'

**/

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';

import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import {resources} from '../lib/resources.js';

//import other components & pages
import Search from './Search.jsx';
import Footer from './Footer.jsx';
import LeftMenu from './LeftMenu.jsx';

import ClinicPage from './ClinicPage.jsx';
import AddResource from './AddResource.jsx';
import About from './About.jsx';


const stylemenu = {
    position: 'fixed',
    padding:'70px 5px 15px 15px',
    height: '100%',
};

export default class App extends React.Component {
  constructor () {
    super();
    // this component's state acts as the overall store for now
    this.state = {
        allResources: [...resources],
        filteredResources: resources,
        showMenu: false,
        appbarState: false,
        selectedFooterIndex: 0,
    };
  }
  componentDidMount () {
    this.displaySearch();
  }
    // these are the app's actions, passed to and called by other components

  displayAddResource () {
    this.setState({screen: <AddResource displaySearch={(result) => this.displaySearch()} />});
    this.setState({showMenu: !this.state.showMenu});
  }

  displayAbout () {
    this.setState({screen: <About displaySearch={(result)=>this.displaySearch()} />});
    this.setState({showMenu: !this.state.showMenu});
  }

  displayFeedback () {
    this.setState({screen: <Feedback displaySearch={(result)=>this.displaySearch()} />});
    this.setState({showMenu: !this.state.showMenu});
  }

  displayResult (result) {
    this.setState({screen: <ClinicPage displaySearch={(result) => this.displaySearch()} result={result} />});
    this.setState({appbarState: true});
  }
  displaySearch () {
    this.setState({screen: <Search container={this.refs.content} footer={this.refs.footer} displayResult={(result) => this.displayResult(result)} filterResources={(string) => this.filterResources(string)} getFilteredResources={() => this.state.filteredResources}/>});
    this.setState({appbarState: false});
  }

// Add a resource to the collection
  addResource (res) {
    this.setState({allResources: [...this.state.allResources, res]});
    this.filterResources(this.state.searchString);
  }

  filterResources (searchString) {
    if (!searchString || searchString.length < 1) {
      this.setState({filteredResources: this.state.allResources, searchString});
      return;
    }
    const filteredResources = this.state.allResources.filter(resource => resource.name.toLowerCase().includes(searchString.toLowerCase()));
    this.setState({filteredResources, searchString});
  }

  /*Change the footer index (this fxn is passed into footer)*/
  footerSelect(index) {
    this.setState({selectedFooterIndex: index});
  }

  //onClick function for toggling menu
  appbarClick () {
     if (!this.appbarState) {
          this.setState({showMenu: !this.state.showMenu});
     } else {
         this.displaySearch();
     }
  }



// end of actions

//old appbar with conditional iconbutton: //<AppBar iconElementLeft={<IconButton>{this.state.appbarState?<NavigationChevronLeft/>:<NavigationMenu />}</IconButton>} onLeftIconButtonTouchTap={() => this.appbarClick()} title="Shout" />
//temporarily removed it and back button is within the page being rendered

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div id='wrapper'>

          <div id='header'>
           <AppBar iconElementLeft={<IconButton><NavigationMenu />}</IconButton>} onLeftIconButtonTouchTap={() => this.appbarClick()} title="Shout" />
          </div>

          <div ref='content' id='content'>
          <CSSTransitionGroup transitionName='push' transitionEnterTimeout={ 300 } transitionLeaveTimeout={ 300 }>
            {this.state.screen}
          </CSSTransitionGroup>
          </div>

          <div id='menu'>
             <Drawer open={this.state.showMenu} style={stylemenu} docked={false}>
               <LeftMenu displayAddResource={() => this.displayAddResource()} displayAbout={() => this.displayAbout()}/>
            </Drawer>
         </div>


          <div ref='footer' id='footer'>
            <Footer selectedIndex={this.state.selectedFooterIndex} onSelect={(index) => this.footerSelect(index)}/>
          </div>

        </div>
      </MuiThemeProvider>

    );
  }
}
