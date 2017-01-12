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

//import other components & pages
import Search from './Search.jsx';
import SearchInputs from './SearchInputs.jsx';
import Footer from './Footer.jsx';
import LeftMenu from './LeftMenu.jsx';
import ClinicPage from './ClinicPage.jsx';
import AddResource from './AddResource.jsx';
import About from './About.jsx';


import PouchDB from 'pouchdb';

var db = new PouchDB('resources');
var remoteCouch = 'http://generaluser:pass@45.56.115.40:5984/resources';



// all of the CSS styles for this component defined here
const styles = {
  appbarTitle: {
    fontSize: 30,
  },

  appbarsubtitle: {
    fontSize: 15,
    color: '#ffffff',
    divAlign:'left',
    textAlign:'center',
    width: '60%'
  },

  stylemenu:{
      position: 'fixed',
      height: '100%',
  },
};

//begin Component definition

export default class App extends React.Component {

  constructor () {
    super();

    // this component's state acts as the overall store for now
    this.state = {
        allResources: [],
        filteredResources: [],
        showMenu: false,
        searchString: '',
        appbarState: false,
        selectedFooterIndex: 0,
        appbarTitle: 'Shout',
        appbarSubtitle: 'Find Accessible Healthcare.',
        appbarIcon: <NavigationMenu />,
        hoveredMapRowIndex: '-1',
        userLat: '33.7490',
        userLng: '-84.3880',

        clinicpageTags:[],
        clinicpageFeedbacks:[]
    };


  }
  // Add a resource to the collection
  addResource (res) {

      //calculate latitude and longitude

      if(!position)
      {
        return "ERROR"
      }
      else{
          return "OK"
          //create json object
          var resource = {
              _id: "Resource"+"_"+res.zip+"_"+new Date().toISOString()+"_"+res.name,
              type: "resource",
              name: res.name,
              civic_address:res.civic_address,
              phone:res.phone,
              website:res.website,
              description: res.description,
              resourcetype: res.type,
              zip:res.zip

          };
          db.put(resource, function callback(err, result) {
              if (!err) {
                  console.log('Added resource');
              }
          });

          this.addTags(res.tags, res.name);

          if (remoteCouch) {
              this.sync();
          }

          this.filterResources(this.state.searchString);
        }
  }

  addFeedback (rev){

    var review = {
        _id: "Feedback"+"_"+rev.name+"_"+new Date().toISOString(),
        type: "feedback",
        name: rev.name,
        author: rev.author,
        accessibility:rev.accessibility,
        quality:rev.quality,
        affordability:rev.affordability,
        text: rev.text,

    };

    db.put(review, function callback(err, result) {
        if (!err) {
            console.log('Added review');
        }
    });

    if (remoteCouch) {
        this.sync();
    }

    this.filterResources(this.state.searchString);

  }

  addTags(tags, res_name) {

    tags.forEach(function(element) {

                    var tag = {
                        _id: "tag"+"_"+res_name+"_"+element.label,
                        type: "tag",
                        name: res_name,
                        value: element.label,
                        count: 1

                    };
                    console.log("Creating tag object:"+tag._id);

                    db.put(tag, function callback(err, result) {
                        if (err) {
                            return console.log(err);
                        }
                    });


      });

    if (remoteCouch) {
        this.sync();
    }

  }


  // onClick function for toggling menu state
  appbarClick () {
       if (!this.state.appbarState) {
           this.setState({showMenu: !this.state.showMenu});
       } else {
          this.displaySearch();
       }

    }

  componentDidMount () {
    this.displaySearch();
    if (remoteCouch) {
        this.sync();
    }
  }
    // these are the app's actions, passed to and called by other components

  displayAddResource() {
    this.setState({appbarIcon:<NavigationChevronLeft />});
    this.setState({appbarTitle:"Add Resource"});
    this.setState({appbarSubtitle:' '});
    this.setState({appbarState:true});
    this.setState({showMenu: false});
    this.setState({screen: <AddResource container={this.refs.content} footer={this.refs.footer} displaySearch={(result) => this.displaySearch()} addResource={(x) => this.addResource(x)} getGeocoder={()=>this.state.geocoder}/>});
  }

  displayFeedback () {
    this.setState({screen: <Feedback displaySearch={(result)=>this.displaySearch()} />});
    this.setState({showMenu: !this.state.showMenu});
  }

  displayResult (result) {
    const clinicname=result.name;
    this.setState({appbarIcon:<NavigationChevronLeft />});

    this.updatePageTags(result.name);
    this.updateFeedbacks(result.name);

    this.setState({appbarTitle:clinicname});
    this.setState({appbarSubtitle:' '});
    this.setState({appbarState:true});
    this.setState({screen: <ClinicPage container={this.refs.content} footer={this.refs.footer} displaySearch={(result) => this.displaySearch()} addTags={(tags, res_name)=>this.addTags(tags,res_name)} addFeedback={(x) => this.addFeedback(x)} getTags={() => this.state.clinicpageTags} getFeedbacks={()=>this.state.clinicpageFeedbacks} result={result} />});
  }


  displaySearch () {

    db.allDocs({startkey : 'Resource_', endkey : 'Resource_\uffff', include_docs: true}, (err, doc) => {
            if (err) { return console.log(err); }
            this.redrawResources(doc.rows);
        });

    this.setState({screen: <Search container={this.refs.content} footer={this.refs.footer} displayResult={(result) => this.displayResult(result)} filterResources={(string) => this.filterResources(string)} getTags={(name) => this.getTags(name)} searchString={this.state.searchString} displayAddResource={() => this.displayAddResource()} getFilteredResources={() => this.state.filteredResources} onGoogleApiLoad={(map, maps) => this.onGoogleApiLoad(map, maps)} userLat={this.state.userLat} userLng={this.state.userLng} />});
    this.setState({appbarTitle:'Shout'});
    this.setState({appbarSubtitle:'Find Accessible Healthcare.'});
    this.setState({appbarState:false});
    this.setState({appbarIcon:<NavigationMenu />});
    this.requestCurrentPosition();


}


  filterResources (searchString) {
    if (!searchString || searchString.length < 1) {
      this.setState({filteredResources: this.state.allResources, searchString});
      return;
    }
    const filteredResources = this.state.allResources.filter(resource => {
                                                                            if(resource.name.toLowerCase().includes(searchString.toLowerCase())||resource.tags.includes(searchString.toLowerCase())){
                                                                              return resource;
                                                                            }
                                                                          });
    this.setState({filteredResources, searchString});
  }

  error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

  /*Change the selected bottom navigation index (this function is passed as a prop to the footer)*/
  footerSelect(index) {
      this.setState({selectedFooterIndex: index});
      if(index===0) {
        this.filterResources('');
      } else if(index===1){
        this.filterResources('children');
      }else if(index===2){
        this.filterResources('mental health');
      }else if(index===3){
        this.filterResources('pregnancy');
      }else if(index===4){
        this.filterResources('');
      }
  }

  hoverTableRow(index) {
       hoveredMapRowIndex: 'index';
  }

  onGoogleApiLoad(map, maps){

    var geo = new google.maps.Geocoder();
    this.setState({geocoder:geo});
    this.setState({googlemap:map});
    this.setState({googlemaps:maps});

  }

  redrawResources(resources){

        var resourcesdocs = {
            results: []
        };
        resources.forEach(function (res) {
            resourcesdocs.results.push(res.doc);
        });

        this.setState({allResources:resourcesdocs.results});
        this.setState({filteredResources:resourcesdocs.results});
    }


  requestCurrentPosition(){
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }

      if (navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition((pos)=>{
                                                      var crd=pos.coords;
                                                      const x=crd.latitude;
                                                      const y=crd.longitude;
                                                      this.setState({userLat:x});
                                                      this.setState({userLng:y});
                                                      console.log("Current location:",x,y);
                                                      }, this.error, options);
      }
  }

  syncError() {
     console.log('data-sync-state: error');
  }

  sync() {

      var opts = { live: true };
      db.replicate.to(remoteCouch, opts, this.syncError);
      db.replicate.from(remoteCouch, opts, this.syncError);
  }

  updatePageTags(name){

    db.allDocs({startkey : 'tag_'+name, endkey : 'tag_'+name+'_\uffff', include_docs: true}, (err, doc) => {

        if (err) { return console.log(err); }

        var tags=[];

        doc.rows.forEach(function(tag){
          tags.push(tag.doc);
        });
        this.setState({clinicpageTags:tags});
    });

  }

  updateFeedbacks(name){


      db.allDocs({startkey : 'Feedback_'+name, endkey : 'Feedback_'+name+'_\uffff', include_docs: true}, (err, doc) => {

          if (err) { return console.log(err); }

          var feedbacks=[];

          doc.rows.forEach(function(feedback){
            feedbacks.push(feedback.doc);
          });
          this.setState({clinicpageFeedbacks:feedbacks});
      });

  }
// end of actions

//sync the database


render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div id='wrapper'>

          <div id='header'>
              <AppBar iconElementLeft={<IconButton>{this.state.appbarIcon}</IconButton>} onLeftIconButtonTouchTap={() => this.appbarClick()} title={this.state.appbarTitle} titleStyle={styles.appbarTitle}>
                <div style={styles.appbarsubtitle}><h4>{this.state.appbarSubtitle}</h4></div>
              </AppBar>
          </div>


          <div ref='content' id='content'>
          <CSSTransitionGroup transitionName='push' transitionEnterTimeout={ 300 } transitionLeaveTimeout={ 300 }>
            {this.state.screen}
          </CSSTransitionGroup>
          </div>

          <div id='menu'>
             <Drawer
             open={this.state.showMenu}
             style={styles.stylemenu}
             docked={false}
             onRequestChange={(showMenu) => this.setState({showMenu})}>
               <LeftMenu displayAddResource={() => this.displayAddResource()} displayAbout={() => this.displayAbout()} addResource={(res)=>this.addResource(res)}/>
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
