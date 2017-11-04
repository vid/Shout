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


const ENTER_KEY = 13;
const styles = {
    main: {
        margin: 'auto',
        padding: '1% 2% 5% 5%',
        width:'50%',
        overflow: 'auto'
    },

    row: {
        display: 'flex',
        flexDirection: 'row'
    },

    input: {
        margin:10,
        fontColor: 'black',
    },

    button: {
        fontSize: 12,
        padding: '2px'
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

      var type;
        if(this.state.value_Type==1){
          type="clinic";
        }else if(this.state.value_Type==2){
          type="emergency";
        }else if(this.state.value_Type==3){
          type="housing";
        }

      var temp = {
            name: this.state.value_Name,
            resourcetype: type,
            phone: this.state.value_Phone,
            civic_address: this.state.value_Address + " " + this.state.value_Apt,
            city: this.state.value_City,
            zip: this.state.value_zip,
            website: this.state.value_Website,
            description: this.state.value_Descript,
            hours: this.state.value_Hours,
            lat: this.state.value_Lat,
            lng: this.state.value_Lng,

            services:this.state.serviceData,
            price:this.state.priceData,

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
        var offsetHeight = document.getElementById('content').clientHeight
        var offsetWidth = document.getElementById('content').clientWidth
        this.setState({ offsetHeight, offsetWidth});
    }

    componentDidMount() {
        this.searchSizer();
        window.addEventListener('resize', () => this.searchSizer(), false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.searchSizer, false);
    }

    handlePhoneChange(event) {
      // This regex replaces all non-digit numbers with blank space
      var cleanNumber = event.target.value.replace(/[^\d]/g, '');
      this.setState({value_Phone: cleanNumber})
    }

    render() {

        const { customError, wordsError, numericError, urlError } = this.errorMessages;
        const { addResource, displaySearch} = this.props;

        const { offsetWidth, offsetHeight} = this.state;
        if (offsetHeight === undefined) {
            return null;
        }

        Formsy.addValidationRule('isCustom', (values, value) => {

          var regobj=/^[a-zA-Z0-9,.!?')( ]*$/;
          return regobj.test(value);
        });

        Formsy.addValidationRule('isUrlCustom', (values, value) => {

          var regobj=/^$|((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
          return regobj.test(value);
        });

        Formsy.addValidationRule('isPhoneNumberCustom', (values, value) => {
          var regobj = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
          return regobj.test(value);
        })

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

          <b>Name</b>
            <Paper style={styles.input}>

              <FormsyText
                name="name"
                validations="isCustom"
                validationError={customError}
                required
                hintText="Resource Name"
                hintStyle={styles.hint}
                onChange={(event) => this.setState({value_Name: event.target.value})}
              />
            </Paper>

            <b>Type</b>
            <Paper style={styles.input}>

                       <SelectField
                           value={this.state.value_Type}
                           onChange={(event, index, value) => this.setState({value_Type:value})}
                         >
                         <MenuItem value={1} primaryText="Clinic" />
                         <MenuItem value={2} primaryText="E.R. or Urgent Care" />
                         <MenuItem value={3} primaryText="Housing" />
                       </SelectField>

          </Paper>

          <b>Address Line 1</b>
          <Paper style={styles.input}>

          <FormsyText
            name="addressline1"
            required
            floatingLabelText="Street Address *"
            floatingLabelFixed={true}
            hintText="12 Grimmauld Place"
            hintStyle={styles.hint}
            onChange={(event) => this.setState({value_Address: event.target.value})}
          />
          </Paper>

          <b>Address Line 2</b>
          <Paper style={styles.input}>
          <FormsyText
            name="aptnumber"
            validations="isCustom"
            validationError={customError}
            hintText="'Suite 45' or 'Apt. 11'"
            hintStyle={styles.hint}
            inputStyle={styles.input}
            onChange={(event) => this.setState({value_Apt: event.target.value})}
          />
          </Paper>


          <b>City</b>
          <Paper style={styles.input}>

          <FormsyText
            name="city"
            validations="isAlpha"
            validationError={wordsError}
            required
            updateImmediately
            floatingLabelText="City *"
            floatingLabelFixed={true}
            hintText="Atlanta"
            hintStyle={styles.hint}
            onChange={(event) => this.setState({value_City: event.target.value})}
          />
          </Paper>

          <b>Zip</b>
            <Paper style={styles.input}>
            <FormsyText
                         name="zip"
                         validations="isNumeric"
                         validationError={numericError}
                         hintText="31415"
                         hintStyle={styles.hint}
                         onChange={(event) => this.setState({value_zip: event.target.value})}
                         /> <br />
          </Paper>


          <b>Phone</b>
            <Paper style={styles.input}>

          <FormsyText
                       name="PhoneNumber"
                       validations="isPhoneNumberCustom"
                       validationError={numericError}
                       updateImmediately
                       required
                       hintText="3225550100"
                       hintStyle={styles.hint}
                       floatingLabelStyle={styles.floatinglabel}
                       inputStyle={styles.input}
                       floatingLabelText="Phone *"
                       floatingLabelFixed={true}
                       onChange={(event) => this.handlePhoneChange(event)}
                       /> <br />
            </Paper>

            <b>Website</b>
            <Paper style={styles.input}>

            <FormsyText
              name="url"
              validations="isUrlCustom"
              validationError={urlError}
              hintText="www.example.com"
              updateImmediately
              hintStyle={styles.hint}
              onChange={(event) => this.setState({value_Website: event.target.value})}
            />

            </Paper>

            <b> Price </b>
            <Paper style={styles.input}>

                <Checkbox
                  label="Medicaid"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Free"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Sliding-scale"
                  style={styles.checkbox}/>


            </Paper>
            <b> Population </b>
            <Paper style={styles.input}>

                <Checkbox
                  label="Adult"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Children/Pediatric"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Women"
                  style={styles.checkbox}/>


            </Paper>
            <b>Category</b>
            <Paper style={styles.input}>

            <b> General Medical (Non-emergency care)</b>

            <Checkbox
              label="Check-up/Physical exam"
              style={styles.checkbox}/>
            <Checkbox
              label="Chronic disease management (diabetes, high blood pressure, cholesterol)"
              style={styles.checkbox}/>
            <Checkbox
              label="STD testing"
              style={styles.checkbox}/>
            <Checkbox
              label="Prescription assistance"
              style={styles.checkbox}/>
            <Checkbox
              label="Podiatry"
              style={styles.checkbox}/>
            <Checkbox
              label="Podiatry"
              style={styles.checkbox}/>

              <b>OB/Gyn and Womens Wellness</b>
            <Checkbox
              label="Pregnancy Testing"
              style={styles.checkbox}/>
            <Checkbox
              label="Pap smear"
              style={styles.checkbox}/>
            <Checkbox
              label="Breast cancer screening (mammograms)"
              style={styles.checkbox}/>
            <Checkbox
              label="Birth control/Contraception"
              style={styles.checkbox}/>
            <Checkbox
              label="Abortion"
              style={styles.checkbox}/>


            <b>Children under 18</b>
            <Checkbox
              label="Check-up/physical"
              style={styles.checkbox}/>
            <Checkbox
              label="Breast cancer screening (mammograms)"
              style={styles.checkbox}/>

            <b>Mental Health and Counseling</b>
            <Checkbox
              label="Depression/"
              style={styles.checkbox}/>
            <Checkbox
              label="Addiction counseling"
              style={styles.checkbox}/>
            <Checkbox
              label="Family counseling"
              style={styles.checkbox}/>

            <b>Dental</b>
            <Checkbox
              label="Tooth Extraction"
              style={styles.checkbox}/>
            <Checkbox
              label="Cavity filling"
              style={styles.checkbox}/>

            <b>Vision</b>
            <Checkbox
              label="Family counseling"
              style={styles.checkbox}/>


            <TextField id="first"
                       hintText=""
                       hintStyle={styles.hint}
                       value={this.state.value_Services}
                       onChange={(event) => this.setState({value_Services: event.target.value})}
                       onKeyPress={(event)=>{
                                   if (event.key === 'Enter') {
                                     this.state.serviceData.push({key:this.state.serviceData.length+1, label: this.state.value_Services})
                                     this.setState({value_Services: ''})
                                   }
                                   }}/><br />

              </Paper>
              <div style={styles.row}>
               Services you entered: {this.state.serviceData.map(this.renderChipService, this)}
              </div>

              <b>Description</b>
            <Paper style={styles.input}>
            <FormsyText
              name="Description"
              required
              hintText="A summary of the facility/founders/background info"
              hintStyle={styles.hint}
              onChange={(event) => this.setState({value_Descript: event.target.value})}
              multiLine={true}
              rows={3}/>

              </Paper>



              <br />
              <br />
                <RaisedButton
                    type="Submit"
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
                                  }
                                  }}/>
                  {this.state.canSubmit? "":<b> Please fill out required fields</b>}

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
