/* jslint node: true, esnext: true */
'use strict';

// JavaScript source code
import React from 'react';
import Formsy from 'formsy-react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';


import {
    FormsyCheckbox,
    FormsyDate,
    FormsyRadio,
    FormsyRadioGroup,
    FormsySelect,
    FormsyText,
    FormsyTime,
    FormsyToggle,
    FormsyAutoComplete
} from 'formsy-material-ui/lib';


const styles = {

    main: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignment: 'right',
        overflow: 'auto'
    },

    section: {
        padding: '1% 2% 5% 5%',
    },

    input: {
        margin: 10,
        fontColor: 'black',
    },

    button: {
        fontSize: 12,
        padding: '2px'
    }

};

export default class LoginRegister extends React.Component {


    constructor() {
        super();
        this.state = {

            type: 1,
            canSubmit: false,
            registerSuccess: false,
            registerError: false,
            loginSuccess: false,
            loginError: false,
        };

        this.errorMessages = {
            customError: "Incorrect format",
            wordsError: "Please only use letters",
            numericError: "Please provide a number",
            urlError: "Please provide a valid URL",
        };
    }



    handleLogin() {

        var user = {
            username: this.state.usernameL,
            password: this.state.passwordL,
        }

        this.loginUser(user)
            .then((response) => {
                return this.setState({
                    loginSuccess: true
                });
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    loginError: true
                });
            });
    }


    handleRegister() {

        var type = this.getType(this.state.type);
        var user = {
            username: this.state.username,
            password: this.state.password
        }
        var metadata={
          usertype: type,
          email: this.state.email,
          zip: this.state.zip,
        }
        this.registerNew(user, metadata)
            .then((response) => {
                console.log(response);
                if (response) {
                    return this.setState({
                        registerSuccess: true
                    });
                } else {
                    this.setState({
                        error: "(Please choose a unique username)"
                    });
                    return this.setState({
                        registerError: true
                    });
                }
            })
            .then(()=>{
              return this.loginUser(user);
            })
            .catch((err) => {
                this.setState({
                    error: "(Unknown error)"
                });
                this.setState({
                    registerError: true
                });
            });

    }

    getType(value) {
        if (value === 1) return "patient";
        else if (value === 2) return "healthcare professional";
        else if (value === 3) return "social worker";
        else return "undefined";
    }

    searchSizer() {
        const {
            container
        } = this.props;
        const {
            offsetHeight,
            offsetWidth
        } = container;
        this.setState({
            offsetHeight,
            offsetWidth
        });
    }

    componentDidMount() {
        this.searchSizer();
        window.addEventListener('resize', () => this.searchSizer(), false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.searchSizer, false);
    }

    render() {

        const {
            customError,
            wordsError,
            numericError,
            urlError
        } = this.errorMessages;
        const {
            addResource,
            displaySearch,
            registerNew,
            loginUser,
            getLoggedIn,
            getRegistered
        } = this.props;

        this.registerNew = registerNew;
        this.loginUser = loginUser;
        this.displaySearch = displaySearch;
        this.getLoggedIn = getLoggedIn;
        this.getRegistered = getRegistered;

        const {
            offsetWidth,
            offsetHeight
        } = this.state;
        if (offsetHeight === undefined) {
            return null;
        }

        Formsy.addValidationRule('isCustom', (values, value) => {

            var regobj = /^[a-zA-Z0-9,.!?')( ]*$/;
            return regobj.test(value);
        });

        return (

            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
          <Formsy.Form
              onValid={()=>this.setState({ canSubmit: true })}
              onInvalid={()=>this.setState({ canSubmit: false })}
              onValidSubmit={()=>this.submitForm}
              onInvalidSubmit={()=>this.notifyFormError}
            >
        <div style={{height: (offsetHeight), overflow: 'auto'}}>
        <div style={styles.main}>



                </div>

                <div style={styles.section}>
                <h3> Register</h3>


                  <div>
                  <b>Username</b>
                    <Paper style={styles.input}>

                      <FormsyText
                        name="name"
                        validations="isCustom"
                        validationError={customError}
                        required
                        hintText="Username"
                        hintStyle={styles.hint}
                        onChange={(event) => this.setState({username: event.target.value})}
                      />
                    </Paper>

                    <b>Type</b>
                    <Paper style={styles.input}>

                               <SelectField
                                   value={this.state.type}
                                   onChange={(event, index, value) => this.setState({type:value})}
                                 >
                                 <MenuItem value={1} primaryText="Patient" />
                                 <MenuItem value={2} primaryText="Healthcare Professional" />
                                 <MenuItem value={3} primaryText="Social Worker" />
                               </SelectField>

                  </Paper>

                    <b>Email</b>
                      <Paper style={styles.input}>

                        <FormsyText
                          name="email"
                          required
                          hintText="Email address"
                          hintStyle={styles.hint}
                          onChange={(event) => this.setState({email: event.target.value})}
                        />
                      </Paper>

                      <b>Password</b>
                          <Paper style={styles.input}>

                            <FormsyText
                              name="password"
                              validations="isCustom"
                              validationError={customError}
                              required
                              hintText="Password"
                              hintStyle={styles.hint}
                              onChange={(event) => this.setState({password: event.target.value})}
                            />
                          </Paper>

                        <b>Zip Code</b>
                          <Paper style={styles.input}>

                            <FormsyText
                              name="zip"
                              validations="isNumeric"
                              validationError={numericError}
                              required
                              hintText="Zip code"
                              hintStyle={styles.hint}
                              onChange={(event) => this.setState({zip: event.target.value})}
                            />
                          </Paper>
                  </div>


                      <br />
                      <br />
                        <RaisedButton
                            label="Register"
                            primary={true}
                            disabled={!this.state.canSubmit}
                            onClick={()=>this.handleRegister()}/>
                          {this.state.canSubmit? "":<b> Please fill out required fields to register</b>}
              </div>

                              <Dialog
                                title="Success"
                                  actions={<FlatButton
                                  label="Close"
                                  primary={true}
                                  keyboardFocused={true}
                                  onTouchTap={() => {
                                    this.setState({registerSuccess: false});
                                    displaySearch();
                                    }}/>}
                                  modal={false}
                                  open={this.state.registerSuccess}
                                  onRequestClose={()=>this.setState({registerSuccess:false})}
                                  >
                                  You have been registered.
                              </Dialog>

                              <Dialog
                                title="Error"
                                  actions={<FlatButton
                                  label="Close"
                                  primary={true}
                                  keyboardFocused={true}
                                  onTouchTap={() => this.setState({registerError: false})}/>}
                                  modal={false}
                                  open={this.state.registerError}
                                  onRequestClose={()=>this.setState({registerError:false})}
                                  >
                                There was an error registering you. {this.state.error}
                              </Dialog>
          </div>
      </Formsy.Form>
      <Formsy.Form
          onValid={()=>this.setState({ canLogin: true })}
          onInvalid={()=>this.setState({ canLogin: false })}
          onValidSubmit={()=>this.submitForm}
          onInvalidSubmit={()=>this.notifyFormError}
        >
    <div style={{height: (offsetHeight), overflow: 'auto'}}>
    <div style={styles.main}>



            </div>

            <div style={styles.section}>
            <h3> Login</h3>


              <div>
              <b>Username</b>
                <Paper style={styles.input}>

                  <FormsyText
                    name="name"
                    validations="isCustom"
                    validationError={customError}
                    required
                    hintText="Username"
                    hintStyle={styles.hint}
                    onChange={(event) => this.setState({usernameL: event.target.value})}
                  />
                </Paper>


                  <b>Password</b>
                      <Paper style={styles.input}>

                        <FormsyText
                          name="password"
                          validations="isCustom"
                          validationError={customError}
                          required
                          hintText="Password"
                          hintStyle={styles.hint}
                          onChange={(event) => this.setState({passwordL: event.target.value})}
                        />
                      </Paper>
              </div>


                  <br />
                  <br />
                    <RaisedButton
                        label="Login"
                        primary={true}
                        disabled={!this.state.canLogin}
                        onClick={()=>this.handleLogin()}/>
                      {this.state.canLogin? "":<b> Please fill out required fields to login</b>}
          </div>

                              <Dialog
                                title="Login Successful"
                                  actions={<FlatButton
                                  label="Close"
                                  primary={true}
                                  onTouchTap={() => { this.setState({loginSuccess: false});
                                                      displaySearch();
                                                      }}/>}
                                  modal={false}
                                  open={this.state.loginSuccess}
                                  onRequestClose={()=>{this.setState({loginSuccess: false})}}>
                                Successfully logged in.
                              </Dialog>

                              <Dialog
                                title="Error"
                                  actions={<FlatButton
                                  label="Close"
                                  primary={true}
                                  keyboardFocused={true}
                                  onTouchTap={() => this.setState({loginError: false})}/>}
                                  modal={false}
                                  open={this.state.loginError}
                                  onRequestClose={()=>this.setState({loginError:false})}
                                  >
                                Wrong username or password {this.state.error}
                              </Dialog>

      </div>
  </Formsy.Form>
  </div>
        );
    }
}
