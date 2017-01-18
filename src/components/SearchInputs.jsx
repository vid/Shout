/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import ActionSearch from 'material-ui/svg-icons/action/search';

import {blue500} from 'material-ui/styles/colors';

import {cyan500} from 'material-ui/styles/colors';

const styles = {
  hintStyle: {
    color:'#01579B',
  },
  inputStyle: {
    marginTop:7,
    width:'100%'
  },
  };

export default class SearchInputs extends React.Component {
  render () {
    const {filterResources} = this.props;
    return (
      <div style={styles.backgroundStyle}>
        <Paper style={styles.inputStyle}>
          <TextField onChange={e => filterResources(e.target.value)} hintText="  Enter any search keyword..." hintStyle={styles.hintStyle}/>
        </Paper>
      </div>
    );
  }
}
