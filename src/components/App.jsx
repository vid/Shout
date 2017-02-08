/**

The main component with the app's actions and 'store.'

**/

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

/*Material-UI theme*/
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*Material-UI components*/
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

//import other components
import Search from './Search.jsx';
import SearchInputs from './SearchInputs.jsx';
import Footer from './Footer.jsx';
import LeftMenu from './LeftMenu.jsx';
import ClinicPage from './ClinicPage.jsx';
import AddResource from './AddResource.jsx';


/*PouchDB server*/

import PouchDB from 'pouchdb';
import PouchDBQuickSearch from 'pouchdb-quick-search';

PouchDB.plugin(PouchDBQuickSearch);

var db = new PouchDB('resourcesnew');
var remoteCouch = 'https://generaluser:pass@shoutapp.org:6984/resourcesnew';

PouchDB.sync('db', 'remoteCouch');

// all of the CSS styles for this component defined here
const styles = {

    appbar: {
        minHeight: 100
    },

    appbarTitle: {
        paddingTop: 5,
        color: '#ffffff',
        fontSize: 30,
    },

    appbarSubtitle: {
        paddingTop: 13,
        fontSize: 15,
        color: '#ffffff',
        marginLeft: 10
    },

    search: {
        paddingTop: 5,
        width: '60%'
    },

    stylemenu: {
        position: 'fixed',
        height: '100%',
    },

    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },

};

//begin Component definition

export default class App extends React.Component {

    constructor() {
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
            searchBar: "",
            hoveredMapRowIndex: '-1',
            userLat: '33.7490',
            userLng: '-84.3880',

            clinicpageTags: [],
            clinicpageFeedbacks: []
        };


    }

    addSingleTag(label, tagsdoc) {

        var tag = {
            value: label,
            count: 1
        }

        tagsdoc.tags.push(tag);
        db.put({
            _id: tagsdoc._id,
            _rev: tagsdoc._rev,
            type: "tag",
            tags: tagsdoc.tags,
        }, function (err, response) {
            if (err) { return console.log(err); }
            console.log("success");
        });
    }


    // action called by AddResource
    addResource(res) {

        //calculate latitude and longitude


        //create json object
        var resource = {
            _id: "Resource" + "_" + res.zip + "_" + res.name,
            type: "resource",
            name: res.name,
            lat: res.lat,
            lng: res.lng,
            civic_address: res.civic_address,
            phone: res.phone,
            website: res.website,
            description: res.description,
            resourcetype: res.type,
            services: res.services,
            zip: res.zip

        };
        db.put(resource, function callback(err, result) {
            if (!err) {
                console.log('Added resource');
            } else {
                console.log('Error adding the resource' + err);
            }
        });

        this.addTags(res.tags, res.name);

        PouchDB.sync('db', 'remoteCouch');

        this.filterResources(this.state.searchString);

    }

    //actions called by ClinicPage

    addFeedback(rev) {

        var review = {
            _id: "Feedback" + "_" + rev.name + "_" + new Date().toISOString(),
            type: "feedback",
            name: rev.name,
            author: rev.author,
            accessibility: rev.accessibility,
            quality: rev.quality,
            affordability: rev.affordability,
            text: rev.text,

        };

        db.put(review, function callback(err, result) {
            if (!err) {
                console.log('Added review');
            }
        });

        this.filterResources(this.state.searchString);

    }

    addTags(tags, res_name) {

        const tagsarr = []

        tags.forEach(function (element) {

            var tag = {
                value: element.label,
                count: 1

            };
            tagsarr.push(tag);

        });

        var tagsobj = {
            _id: "tags" + "_" + res_name,
            type: "tag",
            tags: tagsarr,
        }

        db.put(tagsobj, function callback(err, result) {
            if (err) {
                return console.log(err);
            }
        });

        if (remoteCouch) {
            this.sync();
        }

    }


    // onClick function for toggling menu state
    appbarClick() {
        if (!this.state.appbarState) {
            this.setState({ showMenu: !this.state.showMenu });
        } else {
            this.displaySearch();
        }

    }


    componentDidMount() {
        if (remoteCouch) {
            this.sync();
        }
        this.displaySearch();
    }

//functions to display render different components inside this single page app
    displayAddResource() {

    //first update title, subtitle, and icons in AppBar
        this.setState({ appbarIcon: <NavigationChevronLeft /> });
        this.setState({ appbarTitle: "Add Resource" });
        this.setState({ appbarSubtitle: ' ' });
        this.setState({ appbarState: true });

    //showMenu variable controls what function is called when a user clicks on the top lefthand icon
        this.setState({ showMenu: false });

        this.setState({ screen: <AddResource container={this.refs.content} footer={this.refs.footer} displaySearch={(result) => this.displaySearch()} addResource={(x) => this.addResource(x)} displaySearch={()=>this.displaySearch}/> });
    }

    displayResult(result) {

    //first update title, subtitle, and icons in AppBar
        const clinicname = result.name;
        this.setState({ appbarIcon: <NavigationChevronLeft /> });
        this.updatePageTags(result.name);
        this.updateFeedbacks(result.name);
        this.setState({ appbarTitle: clinicname });
        this.setState({ appbarSubtitle: '' });
        this.setState({ searchBar: "" });
        this.setState({ appbarState: true });

    //now can load a different component. note: all state variables in App.jsx must be changed before it's unmounted, or React throws an error
        this.setState({ screen: <ClinicPage container={this.refs.content} footer={this.refs.footer} displaySearch={(result) => this.displaySearch()} addTags={(tags, res_name)=>this.addTags(tags,res_name)} addFeedback={(x) => this.addFeedback(x)} getTags={() => this.state.clinicpageTags} getFeedbacks={()=>this.state.clinicpageFeedbacks} result={result} vouchFor={(a,b,c)=>this.vouchFor(a,b,c)} vouchAgainst={(a,b,c)=>this.vouchAgainst(a,b,c)} addSingleTag={(a,b)=>this.addSingleTag(a,b)} addFlag={()=>this.addFlag(a,b)}/> });
    }


    displaySearch() {

    //first retrieve all docs again, to reverse any filters
        db.allDocs({ startkey: 'Resource_', endkey: 'Resource_\uffff', include_docs: true }, (err, doc) => {
            if (err) { return this.error(err); }
            this.redrawResources(doc.rows);
        });
        this.setState({ screen: <Search container={this.refs.content} footer={this.refs.footer} displayResult={(result) => this.displayResult(result)} displaySearch={() => this.displaySearch()} filterResources={(string) => this.filterResources(string)} getTags={(name) => this.state.clinicpageTags} searchString={this.state.searchString} displayAddResource={() => this.displayAddResource()} getFilteredResources={() => this.state.filteredResources} onGoogleApiLoad={(map, maps) => this.onGoogleApiLoad(map, maps)} userLat={this.state.userLat} userLng={this.state.userLng} /> });
        this.setState({ appbarTitle: 'Shout' });
        this.setState({ appbarSubtitle: 'Find Accessible Healthcare.' });
        this.setState({ appbarState: false });
        this.setState({ searchBar: <SearchInputs filterResources={(searchString)=>this.filterResources(searchString)} searchString={this.state.searchString}/> });
        this.setState({ appbarIcon: <NavigationMenu /> });
        this.requestCurrentPosition();


    }


//this filter method uses the Pouchdb-Quick-Search library
//See:  https://github.com/nolanlawson/pouchdb-quick-search

    filterResources(searchString) {

        if (!searchString || searchString.length < 1) {
            db.allDocs({ startkey: 'Resource_', endkey: 'Resource_\uffff', include_docs: true }, (err, doc) => {
                if (err) { return console.log(err); }
                this.redrawResources(doc.rows);
            });
        } else {
            db.search({
                query: searchString,
                fields: ['name', 'description', '_id', 'services.label', 'text'],
                include_docs: true,
                mm: '33%'
            }, (err, list) => {

                if (err) {
                    this.error(err);
                }

                var matches = {
                    results: []
                };

                list.rows.forEach(function (res) {
                    if (res.id.startsWith('tags')) {

                        console.log("started with tag");
                        db.search({
                            query: res._id,
                            fields: ['name'],
                            include_docs: true,
                            mm: '33%'
                        }, (err, list) => {

                            if (err) {
                                return console.log("error searching DB:"+err);
                            }
                            else if (res.id.startsWith('Resource')) {
                                matches.results.push(res);
                            }
                        });
                    } else if (res.id.startsWith('Resource')) {
                        matches.results.push(res);
                    } else {
                        console.log("unknown item type");
                    }
                });
                this.redrawFilteredResources(matches.results);

            });
        }

    }

    error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    footerSelect(index) {
        this.setState({ selectedFooterIndex: index });
        if (index === 0) {
            this.filterResources('');
        } else if (index === 1) {
            this.filterResources('children');
        } else if (index === 2) {
            this.filterResources('mental health');
        } else if (index === 3) {
            this.filterResources('pregnancy women');
        } else if (index === 4) {
            this.filterNearMe();
        }
    }

    filterNearMe() {

        var arr = this.state.allResources;
        console.log(arr);
        arr.sort((a, b) => {
            if (a.lat && b.lat) {

                var y_distance = 69 * Math.pow((a.lat - this.state.userLat), 2);
                var x_distance = 69 * Math.pow((this.state.userLng - a.lng), 2);
                var a_distance = Math.round(100 * Math.sqrt(x_distance + y_distance)) / 100;

                y_distance = 69 * Math.pow((b.lat - this.state.userLat), 2);
                x_distance = 69 * Math.pow((this.state.userLng - b.lng), 2);
                var b_distance = Math.round(100 * Math.sqrt(x_distance + y_distance)) / 100;

                return (a_distance - b_distance);
            } else return 0;
        });

        this.setState({ filteredResources: arr });
    }

    hoverTableRow(index) {
        hoveredMapRowIndex: 'index';
    }

//A function that's called by the React Google Maps library after map component loads the API
    onGoogleApiLoad(map, maps) {

        var geo = new google.maps.Geocoder();
        this.setState({ geocoder: geo }); //current version of ShoutApp is not using the geocoder

    }

//Update the rows of the results table on main page
    redrawResources(resources) {

        var resourcesdocs = {
            results: []
        };
        resources.forEach(function (res) {
            resourcesdocs.results.push(res.doc);
        });

        this.setState({ filteredResources: resourcesdocs.results });
    }

//Show filtered rows of the results table on main page
    redrawFilteredResources(resources) {

        var resourcesdocs = {
            results: []
        };
        resources.forEach(function (res) {
            resourcesdocs.results.push(res.doc);
        });

        this.setState({ filteredResources: resourcesdocs.results });
    }

//user gets prompt to allow browser to access current position
    requestCurrentPosition() {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                var crd = pos.coords;
                const x = crd.latitude;
                const y = crd.longitude;
                this.setState({ userLat: x });
                this.setState({ userLng: y });
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

//Since all state is stored in App.jsx, each clinicpage that is rendered must update the current page tags & feedback that's
//currently stored in the state of App.jsx
    updatePageTags(name) {

        db.allDocs({ startkey: 'tags_' + name, endkey: 'tags_' + name + '_\uffff', include_docs: true }, (err, doc) => {

            if (err) { return this.error(err); }

            var tags = [];
            doc.rows.forEach(function (result) {

                tags.push(result.doc);
            });
            if (tags.length > 0) {
                this.setState({ clinicpageTags: tags[0] });
            } else {
                this.setState({ clinicpageTags: [{ value: 'No tags yet', count: '' }] });
            }
        });

    }

//See previous comment
    updateFeedbacks(name) {


        db.allDocs({ startkey: 'Feedback_' + name, endkey: 'Feedback_' + name + '_\uffff', include_docs: true }, (err, doc) => {

            if (err) { return this.error(err); }

            var feedbacks = [];

            doc.rows.forEach(function (feedback) {
                feedbacks.push(feedback.doc);
            });
            this.setState({ clinicpageFeedbacks: feedbacks });
        });

    }

//Function called from ClinicPage to upvote a tag
    vouchFor(tagsdoc, index) {

        var tag = tagsdoc.tags[index];

        var modified_tag = {
            value: tag.value,
            count: tag.count + 1,
        };
        tagsdoc.tags[index] = modified_tag;

        db.put({
            _id: tagsdoc._id,
            _rev: tagsdoc._rev,
            type: "tag",
            tags: tagsdoc.tags,
        }, function (err, response) {
            if (err) { return this.error(err); }
            console.log("successfully upvoted");
        });
    }

//Function called from ClinicPage to downvote a tag
    vouchAgainst(tagsdoc, index) {

        var tag = tagsdoc.tags[index];

        if (tag.count > 0) {
            var modified_tag = {
                value: tag.value,
                count: tag.count - 1,
            };
            tagsdoc.tags[index] = modified_tag;

            db.put({
                _id: tagsdoc._id,
                _rev: tagsdoc._rev,
                type: "tag",
                tags: tagsdoc.tags,
            }, function (err, response) {
                if (err) { return this.error(err); }
                console.log("success");
            });
        } else {
            tagsdoc.tags.splice(index, 1);

            db.put({
                _id: tagsdoc._id,
                _rev: tagsdoc._rev,
                type: "tag",
                tags: tagsdoc.tags,
            }, function (err, response) {
                if (err) { return this.error(err); }
                console.log("successfully downvoted");
            });

        }

    }
    // end of actions

    //sync the database


    render() {

        const { main } = this.props

        //pull any changes since load from remote DB
        db.changes({
            limit: 40,
            since: 0
        }, function (err, response) {
            if (err) { return console.log(err); }
            () => this.redrawResources(doc.rows);
        });

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div id='wrapper'>

          <div id='header'>
              <AppBar iconElementLeft={<IconButton>{this.state.appbarIcon}</IconButton>} onLeftIconButtonTouchTap={() => this.appbarClick()}
              titleStyle={styles.appbar}>
              <div style={styles.column}>
              <div style={styles.row}>
                <div style={styles.appbarTitle}>{this.state.appbarTitle}</div>
                <div style={styles.appbarSubtitle}>{this.state.appbarSubtitle}</div>
              </div>
              <div styles={styles.search}>
                {this.state.searchBar}
              </div>
            </div>
          </AppBar>
          </div>


          <div ref='content' id='content'>
          <CSSTransitionGroup transitionName='slide' transitionEnterTimeout={ 200 } transitionLeaveTimeout={ 300 }>
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
