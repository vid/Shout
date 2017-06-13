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
        padding:15,
        opacity:0.8,
        width:'100%',
        alignment: 'right',
        overflow: 'auto'
    },


    section: {
        padding: '1% 2% 5% 5%',
    },

    info: {
        padding:12,
        margin:10,
        fontColor: 'black',
    },

    button: {
        fontSize: 12,
        padding: '2px'
    }

};

export default class MyAccount extends React.Component {


    constructor() {
        super();

    }

    formatData(userinfo){

      if(userinfo){

        var email=userinfo.email;
        var usertype=userinfo.usertype;
        var zip=userinfo.zip;

        if(!email){
          email="";
          usertype="";
          zip="";
        }
        return (<div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <h4>Name:</h4><div style={styles.info}>{userinfo.name}</div>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <h4>Email:</h4><div style={styles.info}>{email}</div>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <h4>Type:</h4><div style={styles.info}>{usertype}</div>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <h4>Zip:</h4><div style={styles.info}>{zip}</div>
        </div>
        </div>)

      }else return "no data found"

    }

    searchSizer() {
        const { container} = this.props;
        const { offsetHeight, offsetWidth } = container;
        this.setState({ offsetHeight, offsetWidth});
    }

    componentDidMount() {
        this.searchSizer();
        window.addEventListener('resize', () => this.searchSizer(), false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.searchSizer, false);
    }

    render() {

        const { getLoggedIn, getUserinfo} = this.props;
        const { offsetWidth, offsetHeight} = this.state;

        var userinfo=getUserinfo();

        if (offsetHeight === undefined) {
            return null;
        }


        return (

        <Paper style={styles.main}>

          {this.formatData(userinfo)}
        </Paper>
        );
    }
}
