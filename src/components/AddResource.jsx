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

const validators = {
  customvalid: {
    regexp: /^[a-zA-Z0-9,.!?' ]*$/,
    message: 'Not valid time'
  },
  phone: {
    regexp: /^([A-Za-z0-9-]+)/,
    message: 'Not a valid format'
  }
};

export default class AddResource extends React.Component {


    constructor() {
        super();
        this.state = {

            canSubmit: false,
            completedOpen: false,
            errorOpen: false,

            value_Name: "",
            value_Type: 1,
            value_Phone: "",
            value_Address: "",
            value_Apt: "",
            value_City: "Atlanta",
            value_zip: "default",
            value_Website: "default",
            value_Descript: "default",
            value_Tags: [''],
            value_Hours: '',
            value_Lat:'',
            value_Lng:'',
            value_Services:'',

            chipData: [],
            serviceData:[]
        };

        this.errorMessages = {
            customError: "Incorrect format",
            wordsError: "Please only use letters",
            numericError: "Please provide a number",
            urlError: "Please provide a valid URL",
        };

    }


//creates a new Resource_ object and adds it to the database


    formatSubmission() {

    var type="clinic";
    if(this.state.value_Type==2){
      type="emergency";
    }else if(this.state.value_Type==3){
      type="housing";
    }

      var temp = {
            name: this.state.value_Name,
            type: type,
            phone: this.state.value_Phone,
            civic_address: this.state.value_Address + " " + this.state.value_Apt,
            city: this.state.value_City,
            zip: this.state.value_zip,
            website: this.state.value_Website,
            description: this.state.value_Descript,
            tags: this.state.chipData,
            services:this.state.serviceData,
            hours: this.state.value_Hours,
            lat: this.state.value_Lat,
            lng: this.state.value_Lng
        }

        return temp;

    }

    handleRequestDeleteTag(key) {
        this.chipData = this.state.chipData;
        const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
        this.chipData.splice(chipToDelete, 1);
        this.setState({ chipData: this.chipData });
    }

    handleRequestDeleteService(key) {
        this.serviceData = this.state.serviceData;
        const chipToDelete = this.serviceData.map((chip) => chip.key).indexOf(key);
        this.serviceData.splice(chipToDelete, 1);
        this.setState({ serviceData: this.serviceData });
    }

    renderChipTag(data) {

        return (
            <Chip key={data.key} onRequestDelete={() =>this.handleRequestDeleteTag(data.key)}>
          {data.label}
      </Chip>
        );

    }

    renderChipService(data) {

        return (
            <Chip key={data.key} onRequestDelete={() =>this.handleRequestDeleteService(data.key)}>
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

        const { customError, wordsError, numericError, urlError } = this.errorMessages;
        const { addResource, displaySearch} = this.props;

        const { offsetWidth, offsetHeight, footerOffsetHeight } = this.state;
        if (offsetHeight === undefined) {
            return null;
        }

        Formsy.addValidationRule('isCustom', (values, value) => {

          var regobj=/^[a-zA-Z0-9,.!?')( ]*$/;
          return regobj.test(value);
        });

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
              validations="isCustom"
              validationError={customError}
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
                           value={this.state.value_Type}
                           onChange={(event, index, value) => this.setState({value_Type:value})}
                         >
                         <MenuItem value={1} primaryText="Clinic" />
                         <MenuItem value={2} primaryText="E.R. or Urgent Care" />
                         <MenuItem value={3} primaryText="Housing" />
                       </SelectField>

          </div>
          <div>

          <FormsyText
            name="addressline1"
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
            validations="isCustom"
            validationError={customError}
            floatingLabelText="Apt/Office#"
            floatingLabelFixed={true}
            hintText="'Suite 45' or 'Apt. 11'"
            hintStyle={styles.hint}
            floatingLabelStyle={styles.floatinglabel}
            inputStyle={styles.input}
            onChange={(event) => this.setState({value_Apt: event.target.value})}
          />
          </div>

          <FormsyText
            name="city"
            required
            floatingLabelText="City"
            floatingLabelFixed={true}
            hintText="Atlanta"
            hintStyle={styles.hint}
            floatingLabelStyle={styles.floatinglabel}
            inputStyle={styles.input}
            onChange={(event) => this.setState({value_City: event.target.value})}
          />

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
              onChange={(event) => this.setState({value_Website: event.target.value})}
            />

            <div>
            <TextField hintText=""
                       hintStyle={styles.hint}
                       floatingLabelStyle={styles.floatinglabel}
                       inputStyle={styles.input}
                       floatingLabelText="Services (press enter to add)"
                       value={this.state.value_Services}
                       floatingLabelFixed={true}
                       onChange={(event) => this.setState({value_Services: event.target.value})}
                       onKeyPress={(event)=>{
                                   if (event.key === 'Enter') {
                                     this.state.serviceData.push({key:this.state.serviceData.length+1, label: this.state.value_Services})
                                     this.setState({value_Services: ''})
                                   }
                                   }}/><br />

              </div>
              <div style={styles.row}>
               Services you entered: {this.state.serviceData.map(this.renderChipService, this)}
              </div>
              <br />

            <div>
            <FormsyText
              name="Description"
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
                Tags you entered: {this.state.chipData.map(this.renderChipTag, this)}
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
                                  try{
                                    var sub=this.formatSubmission();
                                    this.setState({completedOpen:true});
                                    addResource(sub);
                                  }
                                  catch(err){
                                    this.setState({errorOpen:true});
                                    console.log("error"+err)
                                  }
                                  }}/>

                <Dialog
                  title="Completed"
                    actions={<FlatButton
                    label="Close"
                    primary={true}
                    keyboardFocused={true}
                    onTouchTap={() => {
                                        this.setState({completedOpen: false});
                                        displaySearch();
                                        }}/>}
                    modal={false}
                    open={this.state.completedOpen}
                    onRequestClose={()=>this.setState({completedOpen:false})}
                    >
                  Thanks! Your entry has been submitted for approval by a moderator.
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
