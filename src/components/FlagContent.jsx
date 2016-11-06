
import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {cyan200} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {resources} from '../lib/resources.js';

export default class FlagContent extends React.Component {
    constructor() {
        super()
        this.state = {
   value: 1,
 };
    }
    render(){



        return(
              <div>

              <h3> Please select a reason: </h3>
              <SelectField
          floatingLabelText="Frequency"
          value={this.state.value}
          onChange={(event, index, value) => this.setState({value})}>

              <MenuItem value={1} primaryText="No longer exists" />
              <MenuItem value={2} primaryText="Wrong address" />
              <MenuItem value={3} primaryText="Wrong phone number" />
              <MenuItem value={4} primaryText="Entry is Spam" />
              <MenuItem value={5} primaryText="Other" />

              </SelectField>
              <br />

              <h3> Enter a description: </h3>
                <TextField hintText="Reason"
                         floatingLabelText="Resource Name"
                         floatingLabelFixed={true}
    />

</div>


      )}

}
