/**

The main component with the app's actions and 'store.'

**/
import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
import MapsPlace from 'material-ui/svg-icons/maps/place';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

/*Modules */
import PlacesAutocomplete from 'react-places-autocomplete'
import {
    geocodeByAddress,
    geocodeByPlaceId
} from 'react-places-autocomplete'

//import other components
import Search from './Search.jsx';
import SearchInputs from './SearchInputs.jsx';
import Footer from './Footer.jsx';
import LeftMenu from './LeftMenu.jsx';
import Logout from './Logout.jsx';
import ApproveDocs from './ApproveDocs.jsx';
import ClinicPage from './ClinicPage.jsx';
import AddResource from './AddResource.jsx';
import LoginRegister from './LoginRegister.jsx';
import UpdateDocs from './UpdateDocs.jsx';
import MyAccount from './MyAccount.jsx';
import About from './About.jsx';
import Blog from './Blog.jsx';
import Voucher from './Voucher.jsx'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const pathToBG = require('../img/background.jpeg');
const pathToLogo = require('../img/logo.png');

import PouchDB from 'pouchdb';
import PouchDBQuickSearch from 'pouchdb-quick-search';
PouchDB.plugin(PouchDBQuickSearch);
PouchDB.plugin(require('pouchdb-authentication'));

/*PouchDB server*/
//Create local & remote server, and then sync these. See PouchDB docs at http://pouchdb.com/api.html

var db = new PouchDB('quality_resources');
var remoteCouch = 'https://shouthealth.org/couchdb/quality_resources';
PouchDB.replicate(remoteCouch,db);

var db_pending = new PouchDB('resourcespending');
var remoteCouchPending = 'https://shouthealth.org/couchdb/resourcespending';
PouchDB.sync(db_pending, remoteCouchPending);


const styles = {

    appbar: {
      backgroundColor:'transparent'
    },
    appbarTitle: {
        paddingTop: 7,
        paddingLeft:5,
        color: '#000000',
        fontSize: 40,
    },
    appbarSubtitle: {
        paddingTop: 13,
        fontSize: 15,
        color: '#000000',
        marginLeft: 10
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    places: {
        marginTop: 10,
        marginRight: 30
    },
    button: {
        marginTop: 10
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    headermenu: {
        position: 'absolute',
        right:5,
        paddingTop:7,
        display: 'flex',
        flexDirection: 'row',
        fontColor: '#FFFFFF',
        flexWrap:'wrap'
    },
    headerlinks: {
        color: '#FFFFFF'
    },
    wrapper: {
        backgroundImage: 'url(' + pathToBG + ')',
        backgroundPosition: 'center',
        backgroundAttachment:'fixed'
    }
};

export default class App extends React.Component {

    constructor() {
        super();

        // this component's state acts as the overall store for now
        this.state = {
            allResources: [],
            address: "Atlanta, GA",
            filteredResources: [],
            showMenu: false, //toggles left-hand menu
            landingOpen: true,
            searchString: '',
            appbarState: false,
            selectedIndex: 0,
            appbarTitle: 'Shout',
            appbarSubtitle: '',
            appbarIcon: '',
            searchBar: "",
            searchBar2: "",
            pageLoading: 'true', //true if page has not loaded yet
            userLat: '33.7490',
            userLng: '-84.3880',
            clinicpageTags: [],
            clinicpageFeedbacks: [],
            loggedin: false,
            pendingData: [],
            userinfo:""
        };


    }


    // This method is called by the AddResource component. For now, adds a new
    // document directly to the "resourcesnew" database on the couchdb server.
    // Later, this database should be migrated to a "pending" database where we
    // store items before they are approved/moderated
    addResource(res) {

        //create object to add
        var resource = Object.assign({}, res);
        resource._id="Resource" + "_" + res.resourcetype + "_" + res.name;
        resource.numberreviews='0';
        resource.accessibilityrating="";
        resource.availabilityrating="";

        db_pending.put(resource, function callback(err, result) {
            if (!err) {
                console.log('Added resource');
            } else {
                console.log('Error adding resource' + err);
            }
        });

        db_pending.replicate.to(remoteCouchPending, {
            live: true,
            retry: true,
            back_off_function: function (delay) {
                if (delay === 0) {
                    return 1000;
                }
                return delay * 3;
            }
        });

    }

    // This method is called by ClinicPage, and submits a new "Feedback_"
    // document to the PouchDB database
    addFeedback(rev) {

        var review = Object.assign({}, rev);
        review._id="Feedback" + "_" + rev.name + "_" + new Date().toISOString();
        review.type="feedback";
        review.date=new Date().toISOString();
        review.upvotes='0';
        review.downvotes='0';

        db_pending.put(review, function callback(err, result) {
            if (!err) {
                console.log('Added review');
            } else {
                console.log('Error adding feedback' + err);
            }
        });


    }

        updateDoc(res) {

            //create a new doc with properties of this
            var mod = Object.assign({}, res);
            mod._id="Resource" + "_" + res.resourcetype + "_" + res.name;
            db.put(mod, function callback(err, result) {
                if (!err) {
                    console.log('Modified this doc');
                } else {
                    console.log('Error modifying this doc');
                }
            });
            //create new doc and replace old one
            //delete tags object

            db.replicate.to(remoteCouch, {
                live: true,
                retry: true,
                back_off_function: function (delay) {
                    if (delay === 0) {
                        return 1000;
                    }
                    return delay * 3;
                }
            });

        }



    // This function is called when the left-hand icon in the AppBar is clicked.
    // the action depends on whether the user is currently on the main/landing
    // page or a clinic page result
    appbarClick() {

        if (!this.state.appbarState) {
            //this.setState({
            //    showMenu: !this.state.showMenu
            //});
        } else {
            this.displaySearch();
        }
    }

    changeDoc(res) {
      this.updateDoc(res.doc);
      db_pending.remove(res.doc);
      var tempPendingData = this.state.pendingData;
      console.log("res is: ", res);
      tempPendingData = tempPendingData.filter(function(element) {
        return element != res;
      })
      console.log("after delete: ", tempPendingData);
    }

    changeHeaderInfo(title) {

        this.setState({
            appbarTitle: title
        });
        this.setState({
            appbarIcon: <NavigationChevronLeft />
        });
        this.setState({
            appbarSubtitle: ' '
        });
        this.setState({
            appbarState: true
        });
        this.setState({
            showMenu: false
        });
        this.setState({
            searchBar: "",
            searchBar2: ""
        });

    }

    // This function basically updates the single page app to now display the
    // AddResource component. State variables are changed as needed in order to
    // modify the title and layout of the page.
    displayAddResource() {

        this.changeHeaderInfo("Add Resource");
        this.setState({
            screen: <AddResource container={this.refs.content}
                                 addResource={(x) => this.addResource(x)}
                                 displaySearch={()=>this.displaySearch()}/>
        });

    }

    displayAbout() {

        this.changeHeaderInfo("About");
        this.setState({
            screen: <About container={this.refs.content}/>
        });

    }

    displayBlog() {

        this.changeHeaderInfo("Blog");
        this.setState({
            screen: <Blog container={this.refs.content}/>
        });

    }

    displayLogin() {

        this.changeHeaderInfo("Login/Register");
        this.setState({
            screen: <LoginRegister container={this.refs.content}
                                   displaySearch={() => this.displaySearch()}
                                   addResource={(x) => this.addResource(x)}
                                   registerNew={(user,metadata)=>this.registerNew(user,metadata)}
                                   loginUser={(user,callback)=>this.loginUser(user,callback)}
                                   getLoggedIn={()=>this.state.loggedin}
                                   getRegistered={()=>this.state.registered}/>
        });

    }

    displayMyAccount() {

        this.changeHeaderInfo("My Account");
        this.setState({
            screen: <MyAccount container={this.refs.content}
                               getLoggedIn={() => this.state.loggedin}
                               getUserinfo={()=>this.state.userinfo}
                               changeDoc={(res)=>this.changeDoc(res)}/>
        });

    }

    displayUpdateDocs() {

      if(this.state.loggedin){
        this.changeHeaderInfo("Update Docs");
        this.setState({
            screen: <UpdateDocs container={this.refs.content}
                                footer={this.refs.footer}
                                displaySearch={()=>this.displaySearch}
                                getFilteredResources={() => this.state.filteredResources}
                                updateDoc={(res)=>this.updateDoc(res)}/>

        });
      }
    }

    displayApproveDocs() {

      if(this.state.loggedin) {
        db_pending.allDocs({
            startkey: 'Resource_',
            endkey: 'Resource_\uffff',
            include_docs: true
        }, (err, doc) => {
            if (err) {
                return this.error(err);
            }
            console.log("doc is: ", doc)
            this.changeHeaderInfo("Approve Docs");
            var numRows = doc.total_rows;
            var tempPending = [];
            console.log("doc length is: ", numRows);
            if (numRows > 0) {
              for (var i = 0; i < numRows; i++) {
                tempPending.push(doc.rows[i]);
              }
            }
            console.log("tempPending is: ", tempPending);
            this.setState({
              pendingData: tempPending
            })
            this.setState({
              screen: <ApproveDocs container={this.refs.content}
                                  footer={this.refs.footer}
                                  displayResult={(res)=>this.displayResult(res)}
                                  pendingData={this.state.pendingData}
                                  changeDoc={(res)=>this.changeDoc(res)}/>
            })
        });
        }
    }


    // This function basically updates the single page app to now display the
    // ClinicPage component. State variables are changed as needed in order to
    // modify the title and layout of the page.
    displayResult(result) {

        const clinicname = result.name;
        this.changeHeaderInfo(clinicname);
        this.updateFeedbacks(result.name);
        this.setState({
            screen: <ClinicPage container={this.refs.content}
                                footer={this.refs.footer}
                                displaySearch={(result) => this.displaySearch()}
                                displayVoucher={(data) => this.displayVoucher(data)}
                                addFeedback={(x) => this.addFeedback(x)}
                                getFeedbacks={()=>this.state.clinicpageFeedbacks}
                                result={result} vouchFor={(a,b,c)=>this.vouchFor(a,b,c)}
                                vouchAgainst={(a,b,c)=>this.vouchAgainst(a,b,c)}
                                addFlag={()=>this.addFlag(a,b)}/>
        });

    }



    // This function basically updates the single page app to now display the
    // main component (App.js) with all results and no filter. State variables
    //are changed as needed in order to modify the title and layout of the page.
    displaySearch() {

        //first retrieve all docs again, to reverse any filters
        db.allDocs({
            include_docs: true
        }, (err, doc) => {
            if (err) {
                return this.error(err);
            }
            if (doc.rows.length > 0) {
                this.setState({
                    pageLoading: false
                });
                this.redrawResources(doc.rows);
            }
        });
        this.setState({
            appbarTitle: 'ShoutHealth'
        });
        this.setState({
            appbarSubtitle: ''
        });
        this.setState({
            appbarState: false
        });
        this.setState({
            appbarIcon: ''
        });
        this.setState({
            searchBar: <SearchInputs container={this.refs.content}
                                     getSearchstring={()=>this.state.searchString}
                                     filterResources={(searchString)=>this.filterResources(searchString)}
                                     searchString={this.state.searchString}
                                     getselectedIndex={()=>this.state.selectedIndex}
                                     onSelect={(index) => this.footerSelect(index)}/>
        });
        this.setState({
            screen: <Search container={this.refs.content}
                            footer={this.refs.footer}
                            displayResult={(result) => this.displayResult(result)}
                            displaySearch={() => this.displaySearch()}
                            filterResources={(string) => this.filterResources(string)}
                            displayAddResource={() => this.displayAddResource()}
                            getFilteredResources={() => this.state.filteredResources}
                            getPageLoading={() => this.state.pageLoading}
                            onGoogleApiLoad={(map, maps) => this.onGoogleApiLoad(map, maps)}
                            userLat={this.state.userLat} userLng={this.state.userLng}
                            getSearchstring={()=>this.state.searchString} />
        });

    }

    displayVoucher(data) {
        console.log(data);

        // this.changeHeaderInfo("Print Voucher");
        this.setState({
            screen: <Voucher clinicInfo={data}/>
        });
    }

    //Error method
    error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }



    //This filter method uses the Pouchdb-Quick-Search library
    //See:  http://github.com/nolanlawson/pouchdb-quick-search
    filterResources(searchString) {

      var matches = [];
        if (!searchString || searchString.length < 1) {
            console.log("no search string, drawing all resources");
            db.allDocs({
                startkey: 'Resource_',
                endkey: 'Resource_\uffff',
                include_docs: true
            }, (err, doc) => {
                this.setState({
                    searchString: ""
                });
                if (err) {
                    return console.log(err);
                }
                this.redrawResources(doc.rows);
            });
        } else {
            this.setState({
                searchString: searchString
            });
            db.search({
                query: searchString,
                fields: ['resourcetype', 'population','description', 'services.general.label', 'services.women.label','services.pediatric.label','services.mental_health.label','services.dental.label','services.vision.label'],
                include_docs: true,
            }, (err, list) => {
                if (err) {
                    this.error(err);
                }
                list.rows.forEach(function (res) {
                    if (res.id.startsWith('Resource')) {
                        matches.push(res);
                    }
                });
                this.redrawResources(matches);
            });
        }
    }



    //This function allows user to filter resources based on the selected icon in the footer
    footerSelect(index) {

        //first, go back to the main screen
        this.setState({
            selectedIndex: index
        });
        if (index === 100) {
            this.filterResources('');
        } else if (index === 0) {
            this.filterResources('clinic');
        } else if (index === 1) {
            this.filterResources('women');
        } else if (index === 2) {
            this.filterResources('children');
        } else if (index === 3) {
            this.filterResources('mental health');
        } else if (index === 4) {
            this.filterResources('dental');
        } else if (index === 5) {
            this.filterResources('vision');
        } else if (index === 6) {
            this.filterResources('housing');
        }

         else if (index === 7) {
            this.filterResources('check-up');
        }  else if (index === 8) {
            this.filterResources('emergency');
        }  else if (index === 9) {
            this.filterResources('chronic disease');
        }  else if (index === 9) {
            this.filterResources('STD testing');
        }

         else if (index ===11) {
            this.filterResources('pregnancy testing');
        } else if (index ===11) {
           this.filterResources('pap smear');
       } else if (index ===11) {
          this.filterResources('mammogram');
      } else if (index ===11) {
         this.filterResources('birth control');
     }

     else if (index ===21) {
        this.filterResources('immunization');
     }else if (index ===22) {
        this.filterResources('pediatric check-up');
     }

    }



    //This function sorts resources based on the distance
    filterNearMe() {

        var originalArray = this.state.filteredResources;

        // split original array into 2 arrays, one for locations with coordinates
        // one for without it
        var validCoordination = [],
            invalidCoordination = [];
        for (var i = 0; i < originalArray.length; i++) {
            if (originalArray[i].lat && originalArray[i].lng) {
                validCoordination.push(originalArray[i]);
            } else {
                invalidCoordination.push(originalArray[i]);
            }
        }

        validCoordination.sort((a, b) => {
            if (a.lat && b.lat && b.lng && a.lng) {
                var a_distance = Math.pow((this.state.userLat - a.lat), 2) +
                                 Math.pow((this.state.userLng - a.lng), 2);
                var b_distance = Math.pow((this.state.userLat - b.lat), 2) +
                                 Math.pow((this.state.userLng - b.lng), 2);
                var diff = a_distance - b_distance;
                // console.log("Difference: " + diff);
                return diff;
            } else {
                return 10000;
            }
        });

        // append back those 2 arrays
        var arrSorted = [];
        for (var i = 0; i < validCoordination.length; i++) {
            arrSorted.push(validCoordination[i]);
        }
        for (var i = 0; i < invalidCoordination.length; i++) {
            arrSorted.push(invalidCoordination[i]);
        }

        this.setState({
            filteredResources: arrSorted
        });
    }


    getUser(){

        var dbs = new PouchDB('http://shouthealth.org:6984/resourcespending', {
            skip_setup: true
        });

        dbs.getSession().then((response)=>{
          return dbs.getUser(response.userCtx.name);
        }).then((response)=>{
            return this.setState({userinfo:response});
        }).catch((err)=>{
            console.log(err);
            this.setState({loggedin:false});
            this.setState({userinfo:""});
        })

    }

    // Function that is called by event listeners attached when we called
    // "db.changes. It should refresh the resources when we initially sync the
    // database, but should do nothing otherwise.
    handleChanges(change, changesObject) {

        this.displaySearch();
        changesObject.cancel();

    }



    // A function that's called by the React Google Maps library after map
    // component loads the API Currently doing nothing! shouthealth is not using
    // geocoder. May be necessary in the future.
    onGoogleApiLoad(map, maps) {

        this.setState({
            gmaps: maps
        });
        this.setState({
            gmap: map
        });
        window.google.maps = maps;
        var geo = new google.maps.Geocoder();
        this.setState({
            geocoder: geo
        });

    }

    getPlacesComponent() {

        const inputProps = {
            value: this.state.address,
            onChange: (address) => this.setState({
                address
            }),
        }
        if (this.state.gmap) {
            return <PlacesAutocomplete styles={{ root: {zIndex: 1}  }} inputProps={inputProps} />;
        }

    }

    getSearchMenu() {

        if (!this.state.appbarState) {
            return (
              <div>
                <div style={{display:'flex', flexDirection:'row'}}>
                  <div style={{marginTop:10}}>
                    <MapsPlace />
                  </div>
                  <div style={styles.places}>
                    {this.getPlacesComponent()}
                  </div>
                  <div style={styles.button}>
                  <RaisedButton
                    label ="Go"
                    onTouchTap={()=>this.addressSearchSubmit()}/>
                  </div>
                </div>
                  {this.state.searchBar}
              </div>
                )
        }

    }

    addressSearchSubmit() {
        event.preventDefault()

        geocodeByAddress(this.state.address, (err, latLng) => {
            if (err) {
                console.log('Oh no!', err)
            }
            this.setState({
                userLat: latLng.lat
            });
            this.setState({
                userLng: latLng.lng
            });
        })
        this.filterNearMe();
    }



    //Update the rows of the results table on main page
    redrawResources(resources) {

        var results = [];
        resources.forEach(function (res) {
            results.push(res.doc);
        });
        this.setState({
            filteredResources: results
        });
        this.filterNearMe();

    }


    //Register a new user to the database
    registerNew(user, metadata) {

        var dbs = new PouchDB('http://shouthealth.org:6984/resourcespending', {
            skip_setup: true
        });

        return dbs.signup(user.username, user.password, metadata)
        .then((response)=>{
        return true;
        })
        .catch((err)=>{
          return false;
        });

    }



    loginUser(user) {


        var dbs = new PouchDB('http://shouthealth.org:6984/resourcespending', {
            skip_setup: true
        });

        return dbs.login(user.username, user.password)
        .then((response)=>{
          this.setState({loggedin:true});
          })
        .then((response)=>{
          this.getUser();
          return true;
        })
        .catch((err)=>{
          console.log(err)
          this.setState({loggedin:false});
          return false;
          });;
    }

    getMenuOptions(){

        let loginButton = null;
        const isLoggedIn = this.state.loggedin;
        if (isLoggedIn) {
            return
            <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
              <MenuItem primaryText="About"
                          onTouchTap={()=>this.displayAbout()} />
              <MenuItem primaryText="Blog"
                          onTouchTap={()=>this.displayBlog()}/>
              <MenuItem primaryText ={"My Account ("+this.state.userinfo.name+")"}
                     onTouchTap={()=>this.displayMyAccount()} />
              <MenuItem primaryText="Logout"/>
            </IconMenu>
        } else {
            return <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
              <MenuItem primaryText="About"
                          onTouchTap={()=>this.displayAbout()} />
              <MenuItem primaryText="Blog"
                          onTouchTap={()=>this.displayBlog()}/>
              <MenuItem primaryText ="Login/Register"
                                 onTouchTap={()=>this.displayLogin()} />
            </IconMenu>
      }

    }


    logoutUser() {
      var dbs = new PouchDB('http://shouthealth.org:6984/resourcespending', {
          skip_setup: true
      });

      dbs.logout(function (err, response) {
        if (err) {
          console.log(err)
          console.log("ERROR when logging out");
        }
      }).then((response)=>{
        this.setState({ loggedin: false });
        this.setState({userinfo:""});
      }).catch((err)=>{
        console.log(err)
        this.setState({ loggedin:true });
      });;
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
                this.setState({
                    userLat: x
                });
                this.setState({
                    userLng: y
                });
            }, this.error, options);
        }

    }


    // Since all state is stored in App.jsx, each clinicpage that is rendered
    // must update the current page feedback that's currently stored in the
    // state of App.jsx
    updateFeedbacks(name) {

        db.allDocs({
            startkey: 'Feedback_' + name,
            endkey: 'Feedback_' + name + '_\uffff',
            include_docs: true
        }, (err, doc) => {

            if (err) {
                return this.error(err);
            }
            var feedbacks = [];
            doc.rows.forEach(function (feedback) {
                feedbacks.push(feedback.doc);
            });
            this.setState({
                clinicpageFeedbacks: feedbacks
            });
        });

    }



    //Function called from ClinicPage to upvote a tag.
    vouchFor(tagsdoc, index) {

        var tag = tagsdoc.tags[index];
        var modified_tag = {
            value: tag.value,
            count: tag.count + 1,
        };
        tagsdoc.tags[index] = modified_tag;
        db_pending.put({
            _id: tagsdoc._id,
            _rev: tagsdoc._rev,
            type: "tag",
            tags: tagsdoc.tags,
        }, function (err, response) {
            if (err) {
                console.log(err);
            }
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

            db_pending.put({
                _id: tagsdoc._id,
                _rev: tagsdoc._rev,
                type: "tag",
                tags: tagsdoc.tags,
            }, function (err, response) {
                if (err) {
                    return console.log(err);
                }
                console.log("success");
            });
        } else {
            tagsdoc.tags.splice(index, 1);
            db_pending.put({
                _id: tagsdoc._id,
                _rev: tagsdoc._rev,
                type: "tag",
                tags: tagsdoc.tags,
            }, function (err, response) {
                if (err) {
                    return this.error(err);
                }
                console.log("successfully downvoted");
            });
        }
    }

    componentDidMount() {
        // may be the wrong place to call these. Might be better to call in
        // component will mount
        console.log("component did mount")
        PouchDB.sync(db, remoteCouch).on('complete',() => this.displaySearch());
        PouchDB.sync(db_pending, remoteCouchPending);
        this.requestCurrentPosition();
    }

    // End of actions


    render() {

        return (

            <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div id='wrapper' style={styles.wrapper}>

          <div>
             <Drawer
             open={this.state.showMenu}
             docked={false}
             onRequestChange={(showMenu) => this.setState({showMenu})}>
               <LeftMenu displayAddResource={() => this.displayAddResource()}
                         displayAbout={() => this.displayAbout()}
                         addResource={(res)=>this.addResource(res)}
                         displayUpdateDocs={()=>this.displayUpdateDocs()}
                         displayApproveDocs={()=>this.displayApproveDocs()}
                         getUserinfo={()=>this.state.userinfo}/>
            </Drawer>
         </div>

          <div id='header'>
              <AppBar iconElementLeft={<IconButton>{this.state.appbarIcon}</IconButton>}
                      onLeftIconButtonTouchTap={() => this.appbarClick()}
                      style={styles.appbar}>
              <div style={styles.column}>
              <div style={styles.row}>
                <img src={pathToLogo} height="60"></img>
                <div style={styles.appbarTitle}>{this.state.appbarTitle}</div>
                <div style={styles.appbarSubtitle}>{this.state.appbarSubtitle}</div>
                <div style={styles.headermenu}>
                {this.getMenuOptions()}
              </div>
              </div>
              </div>
          </AppBar>

          {this.getSearchMenu()}

          </div>

          <div ref='content' id='content'>
          <CSSTransitionGroup transitionName='slide'
                              transitionEnterTimeout={ 100 }
                              transitionLeaveTimeout={ 300 }>
            {this.state.screen}
          </CSSTransitionGroup>
          </div>


        </div>
      </MuiThemeProvider>

        );
    }
}
