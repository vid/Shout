/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
    Card,
    CardActions,
    CardHeader,
    CardText,
    CardTitle,
    CardMedia
} from 'material-ui/Card';

const styles = {

    table: {
      cursor:'pointer'
    },
    servicetype: {
        padding:10
    }
}
var serviceEnum = {
    USER: 0,
    MOD: 1,
    ADMIN: 2
};



export default class ModifyDocs extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
              expanded:1,
              accepts:[],
              income:[],
              fee:[],
              population:[],
              services:[],
              languages:[],
              hours:[],
            };

    }

    handleCheck(){



    }

    isChecked(arr, item){


    }

    handleExpand(res, i){
      this.setState({expanded:i});
      this.setState({price:res.price});
      this.setState({population:res.population});
      this.setState({services:res.services});
      this.setState({languages:res.languages});
    }

    getInfo(res){

      if(res.resourcetype==="clinic"||res.resourcetype==="medical care"||res.resourcetype==="dental"){
        return <div>
                <h3>Please add any new info (current info is shown)</h3>
                <p>Accepts:</p>

                      <Checkbox
                        label="Medicaid"
                        style={styles.checkbox}/>
                      <Checkbox
                        label="Medicare"
                        style={styles.checkbox}/>
                      <Checkbox
                        label="Uninsured"
                        style={styles.checkbox}/>

                <p>Income:</p>

                      <Checkbox
                        label="Low-income"
                        style={styles.checkbox}/>
                      <Checkbox
                        label="Any income"
                        style={styles.checkbox}/>

                <p>Fees:</p>

                      <Checkbox
                        label="Sliding-scale"
                        style={styles.checkbox}/>
                      <Checkbox
                        label="Free"
                        style={styles.checkbox}/>
                      <Checkbox
                        label="Financial-Assistance Available"
                        style={styles.checkbox}/>
                      <Checkbox
                        label="Full price"
                        style={styles.checkbox}/>

                <p>Services:</p>
                <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}>

                <div style={styles.servicetype}>
                  <b> General Medical (Non-emergency care)</b>
                  <Checkbox
                    label="Check-up"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Chronic disease management (diabetes, high blood pressure, cholesterol, asthma, obesity)"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Acute Illness/Injury"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Prescription Assistance"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Cardiology"
                    style={styles.checkbox}
                    checked={this.isChecked(this.state.services,"cardiology")}
                    oncheck={this.handleCheck(this.state.services,"cardiology")}/>
                  <Checkbox
                    label="Tuberculosis (TB) Skin Tests"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Adult Physical Exams"
                    style={styles.checkbox}/>
                    <Checkbox
                      label="HIV Testing"
                      style={styles.checkbox}/>
                  <Checkbox
                    label="HIV Treatment/management"
                    style={styles.checkbox}/>
                <Checkbox
                  label="STD Testing & treatment"
                  style={styles.checkbox}/>
                  <Checkbox
                    label="Wound care"
                    style={styles.checkbox}/>
                    <Checkbox
                      label="Diagnostics"
                      style={styles.checkbox}/>
                  <Checkbox
                    label="Adult Immunizations"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Podiatry"
                    style={styles.checkbox}/>
                  </div>
                  <div style={styles.servicetype}>
                    <b>OB/Gyn and Womens Wellness</b>
                  <Checkbox
                    label="Obstetric (pregnancy) care"
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
                    </div>
                    <div style={styles.servicetype}>

                  <b>Children under 18</b>
                  <Checkbox
                    label="Check-up"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="School Physical"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Developmental Assessment"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Speech Assessment"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Pediatric Immunization"
                    style={styles.checkbox}/>

                    </div>
                    <div style={styles.servicetype}>
                  <b>Mental Health and Counseling</b>
                  <Checkbox
                    label="Psychiatric Assessment/Treatment"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Addiction counseling"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Family counseling"
                    style={styles.checkbox}/>
                    <Checkbox
                      label="Individual counseling"
                      style={styles.checkbox}/>
                      <Checkbox
                        label="Group counseling"
                        style={styles.checkbox}/>
                    </div>
                    <div style={styles.servicetype}>
                  <b>Dental</b>
                  <Checkbox
                    label="Tooth Extraction"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Routine Cleaning"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Cavity filling"
                    style={styles.checkbox}/>
                    </div>
                    <div style={styles.servicetype}>
                  <b>Vision</b>
                  <Checkbox
                    label="Eyeglasses"
                    style={styles.checkbox}/>
                  <Checkbox
                    label="Vision Testing"
                    style={styles.checkbox}/>
                    </div>
                    </div>
                <p>Population:</p>


                <Checkbox
                  label="Adult"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Children/Pediatric"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Women"
                  style={styles.checkbox}/>


                <p>Languages</p>

                <Checkbox
                  label="Spanish"
                  style={styles.checkbox}/>
                <Checkbox
                  label="English"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Korean"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Arabic"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Creole"
                  style={styles.checkbox}/>
                <Checkbox
                  label="French"
                  style={styles.checkbox}/>
                <RaisedButton label="Update Resource" onTouchTap={()=>this.handleUpdate()}/>

                </div>;

          }else{

            return "Update field for non-medical resources coming soon "
          }
    }
//This method returns the filteredResources formatted as a table of results
//If the page has not yet loaded, then it returns a simple message "Loading resources"
    formatFilteredResources(filteredResources){

        if(filteredResources.length>0){

          return filteredResources.map((result, i) =>
              (<Card>
                <CardText>
                <h2>{result.name}</h2>
                    {result.civic_address}
                    <div>
                      {this.state.expanded===i?this.getInfo(result):""}
                    </div>
                    <FlatButton label="expand" onTouchTap={()=>this.handleExpand(result,i)}/>
                </CardText>
              </Card>)
              );
        }
    }

      handleUpdate(res){

          var newres= {
            _id:res._id,
            _rev:res._rev,
            name: res.name,
            resourcetype: res.resourcetype,
            phone: res.phone,
            civic_address: res.civic_address,
            city: res.city,
            zip: res.zip,
            website: res.website,
            description: this.state.description,
            lat: res.lat,
            lng: res.lng,

            hours: this.state.hours,
            fee:this.state.fee,
            income:this.state.fee,
            accepts:this.state.accepts,
            languages:this.state.languages,
            population:this.state.population,
            services:this.state.services,
            tags:this.state.tags,

            numberreviews:res.numberreviews,
            accessibilityrating:res.accessibilityrating,
            availabilityrating:res.availabilityrating,

          };

              try{
                this.setState({completedOpen:true});
                updateResource(newres);
              }
              catch(err){
                this.setState({errorOpen:true});
                console.log("error"+err)
              }

      }

    render() {

        const { getFilteredResources, changeDoc} = this.props;
        var filteredResources = getFilteredResources();
        this.changeDoc=changeDoc;

        return (
        <div>
          <div style={{display:'flex', flexDirection:'row', paddingLeft:20, backgroundColor:"#FFFFFF"}}>
            <h2>Results</h2>
            <div style={{padding:15}}>
            </div>
            </div>
        {this.formatFilteredResources(filteredResources)}
      </div>
        );
    }
}
