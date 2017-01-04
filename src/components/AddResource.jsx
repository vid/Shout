/* jslint node: true, esnext: true */
'use strict';

// JavaScript source code
import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { cyan200 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';

import { resources } from '../lib/resources.js';

const ENTER_KEY = 13;
const styles = {
    main: {
        padding: '1% 2% 5% 5%',
        alignment: 'right',
        overflow: 'auto'
    },

    row: {
        display: 'flex',
        flexDirection: 'row'
    },

    input: {
        fontColor: 'black',
    },

    button: {
        fontSize: '12',
        padding: '2px'
    },

    floatinglabel: {
        color: 'black',
    },

};

export default class AddResource extends React.Component {


constructor() {
    super();
    this.state = {
        value_Name:"Default",
        value_Type:"asdf",
        value_Phone:"default",
        value_Address:"asdf",
        value_Apt:"default",
        value_zip:"default",
        value_Website:"default",
        value_Descript:"default",
        value_Tags:[''],
        value_Hours:'',

        chipData: [
    ]};
}


    submitAll() {

        var temp = {
            name: this.state.value_Name,
            type: this.state.value_Type,
            phone: this.state.value_Phone,
            civic_address: this.state.value_Address + " " + this.state.value_Apt,
            zip: this.state.value_zip,
            website: this.state.value_Website,
            description: this.state.value_Descript,
            tags: this.state.chipData,
            hours: this.state.value_Hours,
        }

        console.log(temp);
        return temp;

    }
    handleRequestDelete(key) {
        this.chipData = this.state.chipData;
        const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
        this.chipData.splice(chipToDelete, 1);
        this.setState({ chipData: this.chipData });
    }

    renderChip(data) {
        return (
            <Chip key={data.key} onRequestDelete={() =>this.handleRequestDelete(data.key)}>
          {data.label}
      </Chip>
        );
    }

    searchSizer() {
        const { container, footer } = this.props;
        const { offsetHeight, offsetWidth } = container;
        const footerOffsetHeight = footer.offsetHeight;
        this.setState({ offsetHeight, offsetWidth, footerOffsetHeight });
    }

    componentDidMount() {
        this.searchSizer();
        window.addEventListener('resize', () => this.searchSizer(), false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.searchSizer, false);
    }

    render() {
        const { addResource } = this.props;
        const { offsetWidth, offsetHeight, footerOffsetHeight } = this.state;
        if (offsetHeight === undefined) {
            return null;
        }

        return (

            <div style={{height: (offsetHeight), overflow: 'auto'}}>
        <div style={styles.main}>

            <h3> Add Resource (fields denoted by * are mandatory)</h3>

          <div>

          <div style={styles.row}>
            <TextField hintText="Name"
                       hintStyle={styles.hint}
                       floatingLabelStyle={styles.floatinglabel}
                       inputStyle={styles.input}
                       floatingLabelText="Resource Name"
                       floatingLabelFixed={true}
                       onChange={(event) => this.setState({value_Name: event.target.value})}/><br />

                       <SelectField
                           floatingLabelText="Select type *"
                           floatingLabelStyle={styles.floatinglabel}
                           value={1}
                         >
                         <MenuItem value={1} primaryText="Clinic" />
                         <MenuItem value={2} primaryText="Hospital" />
                         <MenuItem value={3} primaryText="Housing" />
                       </SelectField>

          </div>
          <div style={styles.addressSection}>
            <TextField hintText="Address"
                       hintStyle={styles.hint}
                       floatingLabelStyle={styles.floatinglabel}
                       inputStyle={styles.input}
                       floatingLabelText="Street Address *"
                       floatingLabelFixed={true}
                       onChange={(event) => this.setState({value_Address: event.target.value})}/><br />

            <TextField hintText="Apt/Office #"
                       hintStyle={styles.hint}
                       floatingLabelStyle={styles.floatinglabel}
                       inputStyle={styles.input}
                       floatingLabelText="Apt/Office # *"
                       floatingLabelFixed={true}
                       onChange={(event) => this.setState({value_Apt: event.target.value})}/><br />

            <TextField hintText="Zip Code"
                      hintStyle={styles.hint}
                      floatingLabelStyle={styles.floatinglabel}
                      inputStyle={styles.input}
                      floatingLabelText="Zip code *"
                      floatingLabelFixed={true}
                      onChange={(event) => this.setState({value_zip: event.target.value})}/><br />
          </div>

            <TextField hintText="Phone Number"
                       hintStyle={styles.hint}
                       floatingLabelStyle={styles.floatinglabel}
                       inputStyle={styles.input}
                       floatingLabelText="Phone Number *"
                       floatingLabelFixed={true}
                       onChange={(event) => this.setState({value_Phone: event.target.value})}/><br />

            <TextField hintText="Website"
                       hintStyle={styles.hint}
                       floatingLabelStyle={styles.floatinglabel}
                       inputStyle={styles.input}
                       floatingLabelText="Website"
                       floatingLabelFixed={true}
                       onChange={(event) => this.setState({value_Website: event.target.value})}/><br />

            <TextField hintText="Description"
                       inputStyle={styles.input}
                       floatingLabelStyle={styles.floatinglabel}
                       floatingLabelText="Description *"
                       floatingLabelFixed={true}
                       multiLine={true}
                       rows={3}
                       rowsMax={10}
                       onChange={(event) => this.setState({value_Descript: event.target.value})}/><br />


              <div style={styles.row}>
               <TextField hintText=""
                          hintStyle={styles.hint}
                          floatingLabelStyle={styles.floatinglabel}
                          inputStyle={styles.input}
                          floatingLabelText="Tags (press enter to add)"
                          floatingLabelFixed={true}
                          value={this.state.value_Tags}
                          onChange={(event) => this.setState({value_Tags: event.target.value})}
                          onKeyPress={(event)=>{
                                      if (event.key === 'Enter') {
                                        this.state.chipData.push({key:this.state.chipData.length+1, label: this.state.value_Tags})
                                        this.setState({value_Tags: ''})
                                      }
                                      }}/><br />

               </div>


               <div style={styles.row}>
                Tags you entered: {this.state.chipData.map(this.renderChip, this)}
               </div>
               <br />

               <div style={styles.column}>
               Or click to add one or more of the suggested tags below:

              <div>

              <div>
               <RaisedButton
                     label="medicaid"
                     labelPosition="before"
                     icon={<ContentAdd />}
                     style={styles.button}
                     onClick={()=>{
                                    this.state.chipData.push({key:this.state.chipData.length+1, label: 'medicaid'});
                                    this.setState({value_Tags: ''});
                                    }}/>
               <RaisedButton
                    label="free"
                    labelPosition="before"
                    icon={<ContentAdd />}
                    style={styles.button}
                    onClick={()=>{
                                   this.state.chipData.push({key:this.state.chipData.length+1, label: 'free'});
                                   this.setState({value_Tags: ''});
                                   }}/>
                  <RaisedButton
                    label="sliding scale"
                    labelPosition="before"
                    icon={<ContentAdd />}
                    style={styles.button}
                    onClick={()=>{
                                   this.state.chipData.push({key:this.state.chipData.length+1, label: 'sliding scale'});
                                   this.setState({value_Tags: ''});
                                   }}/>

                  </div>
                  <div>
                  <RaisedButton
                    label="children"
                    labelPosition="before"
                    icon={<ContentAdd />}
                    style={styles.button}
                    onClick={()=>{
                                   this.state.chipData.push({key:this.state.chipData.length+1, label: 'children'});
                                   this.setState({value_Tags: ''});
                                   }}/>
                  <RaisedButton
                    label="adult"
                    labelPosition="before"
                    icon={<ContentAdd />}
                    style={styles.button}
                    onClick={()=>{
                                   this.state.chipData.push({key:this.state.chipData.length+1, label: 'adult'});
                                   this.setState({value_Tags: ''});
                                   }}/>
                  <RaisedButton
                    label="women's health"
                    labelPosition="before"
                    icon={<ContentAdd />}
                    style={styles.button}
                    onClick={()=>{
                                   this.state.chipData.push({key:this.state.chipData.length+1, label: 'women'});
                                   this.setState({value_Tags: ''});
                                   }}/>

                  </div>
                </div>
               </div>

              <br />
              <br />
                <RaisedButton label="Submit" primary={true} onClick={()=>{
                                                                            var x=this.submitAll();
                                                                            addResource(x)
                                                                         }}/>

          </div>
        </div>
      </div>
        );
    }
}
