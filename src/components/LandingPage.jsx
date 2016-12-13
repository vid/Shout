/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

import {blue500} from 'material-ui/styles/colors';
import {cyan400} from 'material-ui/styles/colors';
import {cyan500} from 'material-ui/styles/colors';


const styles = {

  landingpageStyle:{
    padding:'20px 0px 0px 0px',
    display: 'flex',
    flexDirection: 'column',
  },

  buttonStyle: {
    margin: '5px 0px 5px 0px'
  },

  hintStyle: {
    color:'#01579B',
  },
  backgroundStyle:{
    backgroundColor:cyan500,
    height:'100%',
    margin: '60px 0px 0px 0px',
  },
  inputStyle: {
    margin: '10px 10px 10px 10px',
    borderColor: blue500,
  },

  };

export default class LandingPage extends React.Component {
  render () {

    const {displaySearch} = this.props;
    return (
      <div style={styles.landingpageStyle}>

      <RaisedButton onClick = {displaySearch} style={styles.buttonStyle} backgroundColor="#B2EBF2" label="Search by Keyword" labelPosition="before" icon={<NavigationChevronRight />} fullWidth={true} />

  <RaisedButton style={styles.buttonStyle} backgroundColor="#B2EBF2" label="Near me" labelPosition="before" icon={<NavigationChevronRight />} fullWidth={true} />

    <RaisedButton style={styles.buttonStyle} backgroundColor="#B2EBF2" label="Children & Adolescents" labelPosition="before" icon={<NavigationChevronRight />} fullWidth={true} />

    <RaisedButton style={styles.buttonStyle} backgroundColor="#B2EBF2" label="Pregnancy & Family Planning" labelPosition="before" icon={<NavigationChevronRight />} fullWidth={true} />

    <RaisedButton style={styles.buttonStyle} backgroundColor="#B2EBF2" label="HIV & STDs" labelPosition="before" icon={<NavigationChevronRight />} fullWidth={true} />

    <RaisedButton style={styles.buttonStyle} backgroundColor="#B2EBF2" label="Mental Health & Counseling" labelPosition="before" icon={<NavigationChevronRight />} fullWidth={true} />
      </div>
    );
  }
}
