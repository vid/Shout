/* jslint node: true, esnext: true */
'use strict';

// JavaScript source code
import React from 'react';
import Formsy from 'formsy-react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
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

import { cyan200 } from 'material-ui/styles/colors';


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
        fontSize: 12,
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

            canSubmit: false,
            completedOpen: false,
            errorOpen: false,

            value_Name: "Default",
            value_Type: "asdf",
            value_Phone: "default",
            value_Address: "asdf",
            value_Apt: "default",
            value_zip: "default",
            value_Website: "default",
            value_Descript: "default",
            value_Tags: [''],
            value_Hours: '',

            geoResult: "Waiting",

            chipData: []
        };

        this.errorMessages = {
            wordsError: "Please only use letters",
            numericError: "Please provide a number",
            urlError: "Please provide a valid URL",
        };

        this.setGeoResult = this.setGeoResult.bind(this);
    }

    submitForm(data) {
        alert(JSON.stringify(data, null, 4));
    }

    notifyFormError(data) {
        console.error('Form error:', data);
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

        return temp;

    }

    findAddress(geo){

      this.geocodeAddress(this.value_Address, geo, this.setGeoResult);

    }

    geocodeAddress(address, geo, callback){

      this.setState({canSubmit:false});

      if(geo){
         var address = "1000 Northside Dr NW 30318";
         geo.geocode({'address': address}, function(results, status) {
           if (status === 'OK') {
              var response=results[0].geometry.location;
              callback(response);
           } else {
             alert('Geocode was not successful for the following reason: ' + status);
           }
         });
       }

       else{
       console.log("Geocoder not found");
       }

   }

   setGeoResult(x){
      this.setState({geoResult:x});
      this.setState({canSubmit:true});
   }

    getApiResult()
    {
      if(!this.state.geoResult){
      return "Waiting";
      }
      else{
      return "Success";
      }
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

        const { wordsError, numericError, urlError } = this.errorMessages;
        const { addResource, getGeocoder} = this.props;
        var geo = getGeocoder();

        const { offsetWidth, offsetHeight, footerOffsetHeight } = this.state;
        if (offsetHeight === undefined) {
            return null;
        }

        return (

            <Formsy.Form
              onValid={()=>this.setState({ canSubmit: true })}
              onInvalid={()=>this.setState({ canSubmit: false })}
              onValidSubmit={()=>this.submitForm}
              onInvalidSubmit={()=>this.notifyFormError}
            >
        <div style={{height: (offsetHeight), overflow: 'auto'}}>
        <div style={styles.main}>

            <h3> Add Resource (fields denoted by * are mandatory)</h3>

          <div>

          <div style={styles.row}>

            <FormsyText
              name="name"
              validations="isWords"
              validationError={wordsError}
              required
              hintText="Resource Name"
              floatingLabelText="Resource Name *"
              floatingLabelFixed={true}
              hintStyle={styles.hint}
              floatingLabelStyle={styles.floatinglabel}
              inputStyle={styles.input}
              onChange={(event) => this.setState({value_Name: event.target.value})}
            />
            <br />

            </div>
            <div>
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
          <div>

          <FormsyText
            name="addressline1"
            validations="isAlphanumeric"
            validationError={wordsError}
            required
            floatingLabelText="Street Address"
            floatingLabelFixed={true}
            hintText="12 Grimmauld Place"
            hintStyle={styles.hint}
            floatingLabelStyle={styles.floatinglabel}
            inputStyle={styles.input}
            onChange={(event) => this.setState({value_Address: event.target.value})}
          />
          </div>
          <div>

          <FormsyText
            name="aptnumber"
            validations="isAlphanumeric"
            validationError={wordsError}
            required
            floatingLabelText="Apt/Office#"
            floatingLabelFixed={true}
            hintText="#45"
            hintStyle={styles.hint}
            floatingLabelStyle={styles.floatinglabel}
            inputStyle={styles.input}
            onChange={(event) => this.setState({value_Apt: event.target.value})}
          />

          </div>
          <RaisedButton onTouchTap={()=>this.findAddress(geo)}> Find this address </RaisedButton>
          <div>{"Coordinates: "+this.state.geoResult}</div>
          <div>

            <FormsyText
                         name="zip"
                         validations="isNumeric"
                         validationError={numericError}
                         hintText="31415"
                         hintStyle={styles.hint}
                         floatingLabelStyle={styles.floatinglabel}
                         inputStyle={styles.input}
                         floatingLabelText="Zip code *"
                         floatingLabelFixed={true}
                         onChange={(event) => this.setState({value_zip: event.target.value})}
                         /> <br />
          </div>


          <FormsyText
                       name="PhoneNumber"
                       validations="isNumeric"
                       validationError={numericError}
                       hintText="3225550100"
                       hintStyle={styles.hint}
                       floatingLabelStyle={styles.floatinglabel}
                       inputStyle={styles.input}
                       floatingLabelText="Phone *"
                       floatingLabelFixed={true}
                       onChange={(event) => this.setState({value_Phone: event.target.value})}
                       /> <br />


            <FormsyText
              name="url"
              validations="isUrl"
              validationError={urlError}
              hintText="http://www.example.com"
              floatingLabelText="website URL"
              floatingLabelFixed={true}
              updateImmediately
              hintStyle={styles.hint}
              floatingLabelStyle={styles.floatinglabel}
              inputStyle={styles.input}
            />

            <div>
            <FormsyText
              name="Description"
              validations="isWords"
              validationError={wordsError}
              required
              hintText="A summary of the facility/founders/background info"
              floatingLabelText="Description *"
              floatingLabelFixed={true}
              hintStyle={styles.hint}
              floatingLabelStyle={styles.floatinglabel}
              inputStyle={styles.input}
              onChange={(event) => this.setState({value_Descript: event.target.value})}
              multiLine={true}
              rows={3}/>

              </div>


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
                <RaisedButton
                    label="Submit"
                    primary={true}
                    disabled={!this.state.canSubmit}
                    onClick={()=>{
                                  if(!this.geoResult){
                                    var x=this.submitAll();
                                    this.setState({completedOpen:true});
                                    addResource(x, response);
                                  }
                                  else{
                                    this.setState({errorOpen:true});
                                  }
                                  }}/>

                <Dialog
                  title="Completed"
                    actions={<FlatButton
                    label="Close"
                    primary={true}
                    keyboardFocused={true}
                    onTouchTap={() => this.setState({completedOpen: false})}/>}
                    modal={false}
                    open={this.state.completedOpen}
                    onRequestClose={()=>this.setState({completedOpen:false})}
                    >
                  Thank you. Your entry has been submitted.
                </Dialog>

                <Dialog
                  title="Error"
                    actions={<FlatButton
                    label="Close"
                    primary={true}
                    keyboardFocused={true}
                    onTouchTap={() => this.setState({errorOpen: false})}/>}
                    modal={false}
                    open={this.state.errorOpen}
                    onRequestClose={()=>this.setState({errorOpen:false})}
                    >
                  Error
                </Dialog>
          </div>
        </div>
      </div>

      </Formsy.Form>
        );
    }
}
