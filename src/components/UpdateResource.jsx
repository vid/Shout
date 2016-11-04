
import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {cyan200} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';

import {resources} from '../lib/resources.js';

export default class UpdateResource extends React.Component {
    constructor() {
        super()
    }
    render(){



      return(
            <div>
              <TextField hintText="Name"
                         floatingLabelText="Resource Name"
                         floatingLabelFixed={true}
                         />

            </div>


      )}

}
