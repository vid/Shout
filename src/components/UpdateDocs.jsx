/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import {servicestemplate} from '../lib/services.js';
import {languagestemplate} from '../lib/languages.js';

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



export default class UpdateDocs extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
              tab:"1",
              expanded:1,
              accepts:[],
              income:[],
              fee:[],
              population:[],
              languages:[],
              services:[],
            };

    }

    tabChange(value){
      this.setState({tab: value});
    }

    toggleScore(value, i, type){

        var newobj=this.state.services;

        if(type==="adult"){newobj.general[i].adminvotes=value;}
        else if(type==="women"){newobj.women[i].adminvotes=value;}
        else if(type==="pediatric"){newobj.pediatric[i].adminvotes=value;}
        else if(type==="mental"){newobj.mental_health[i].adminvotes=value;}
        else if(type==="dental"){newobj.dental[i].adminvotes=value;}
        else if(type==="vision"){newobj.vision[i].adminvotes=value;}
        this.setState({services:newobj});

    }

    toggleScoreOthers(value, i, type){
      var newobj;
        if(type==="language"){
          newobj=this.state.languages;
          newobj[i].adminvotes=value;
          this.setState({languages:newobj});
        }
        else if(type==="fee"){
          newobj=this.state.fee;
          newobj[i].adminvotes=value;
          this.setState({fee:newobj});
        }
        else if(type==="income"){
          newobj=this.state.income;
          newobj[i].adminvotes=value;
          this.setState({income:newobj});
        }
        else if(type==="accepts"){

          newobj=this.state.accepts;
          newobj[i].adminvotes=value;
          this.setState({accepts:newobj});
        }

    }

    handleExpand(res, i){
      this.setState({expanded:i});
      this.setState({price:res.price});
      this.setState({population:res.population});
      if(this.state.services.length<1){
        this.setState({services:servicestemplate});
      }
      this.setState({languages:res.languages});
    }

    getServices(type){

      var servicesarr=[];
      if(type==="adult"){servicesarr=this.state.services.general;}
      else if(type==="women"){servicesarr=this.state.services.women;}
      else if(type==="pediatric"){servicesarr=this.state.services.pediatric;}
      else if(type==="mental"){servicesarr=this.state.services.mental_health;}
      else if(type==="dental"){servicesarr=this.state.services.dental;}
      else if(type==="vision"){servicesarr=this.state.services.vision;}

      return servicesarr.map((element, i)=>
      <div>
      <p>{element.label}</p>
         <RadioButtonGroup name="shipSpeed" defaultSelected='0' valueSelected={element.adminvotes} onChange={(e, value)=>this.toggleScore(value,i, type)}>
           <RadioButton
             value='0'
             label='0'
           />
          <RadioButton
            value='1'
            label='1'
          />
          <RadioButton
            value='2'
            label='2'
          />
          <RadioButton
            value='3'
            label='3'
          />
        </RadioButtonGroup>
      </div>);

    }

    getOthers(type){

      var arr=[];
      if(type==="languages"){arr=this.state.languages;}
      else if(type==="fee"){arr=this.state.fee;}
      else if(type==="income"){arr=this.state.services.income;}
      else if(type==="accepts"){arr=this.state.services.accepts;}

      return arr.map((element, i)=>
      <div>
        <p>{element.label}</p>
           <RadioButtonGroup name="others" defaultSelected='0' valueSelected={element.adminvotes} onChange={(e, value)=>this.toggleScoreOthers(value, i, type)}>
             <RadioButton
               value='0'
               label='0'
             />
            <RadioButton
              value='1'
              label='1'
            />
            <RadioButton
              value='2'
              label='2'
            />
            <RadioButton
              value='3'
              label='3'
            />
          </RadioButtonGroup>
      </div>);

    }

    getDate(res){

      if(res.date){
        return res.date;
      }else{
      return "Never";
      }
    }
    getInfo(res){

        return <div>
                <h3>Please add any new info </h3>
                <p>Accepts:</p>

                      {this.getOthers("accepts")}


                <p>Income:</p>

                      {this.getOthers("income")}


                <p>Fees:</p>

                      {this.getOthers("fee")}

                <p>Languages</p>

                      {this.getOthers("languages")}

                <p>Services:</p>
                <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}>

                <div style={styles.servicetype}>
                  <b> General Medical (Non-emergency care)</b>
                  {this.getServices("adult")}
                </div>
                <div style={styles.servicetype}>
                  <b>OB/Gyn and Womens Wellness</b>
                  {this.getServices("women")}
                </div>
                <div style={styles.servicetype}>
                  <b>Children under 18</b>
                  {this.getServices("pediatric")}
                </div>
                <div style={styles.servicetype}>
                  <b>Mental Health and Counseling</b>
                  {this.getServices("mental")}
                </div>
                <div style={styles.servicetype}>
                  <b>Dental</b>
                  {this.getServices("dental")}
                </div>
                <div style={styles.servicetype}>
                  <b>Vision</b>
                  {this.getServices("vision")}
                </div>
                </div>

                <p>Population:</p>
                <Checkbox
                  label="Adult"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Children"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Women"
                  style={styles.checkbox}/>
                <Checkbox
                  label="Seniors"
                  style={styles.checkbox}/>


                <RaisedButton label="Update Resource" onTouchTap={()=>this.handleUpdate(res)}/>

                </div>;

    }
//This method returns the filteredResources formatted as a table of results
//If the page has not yet loaded, then it returns a simple message "Loading resources"
    formatFilteredResources(filteredResources){

        if(filteredResources.length>0){

          return filteredResources.map((result, i) =>this.getCards(result, i));
        }
    }


    getCards(result, i){

      if(this.state.tab==="1"){
        if(result.resourcetype==="clinic"||result.resourcetype==="medical care"||result.resourcetype==="dental"||result.resourcetype==="children"){
          return (<Card>
            <CardText>
            <h2>{(i+1)+" . ("+result.resourcetype+") "+result.name +"(Last updated:"}{this.getDate(result)})</h2>
                {result.civic_address}
                <div>
                  {this.state.expanded===i?this.getInfo(result):""}
                </div>
                <FlatButton label="expand" onTouchTap={()=>this.handleExpand(result,i)}/>
            </CardText>
          </Card>);
          }else{
            return ""
          }
      }else if(this.state.tab==="2"){
        if(result.resourcetype==="housing"){
          return (<Card>
            <CardText>
            <h2>{(i+1)+" . ("+result.resourcetype+") "+result.name+" Last updated:"}{this.getDate(result)}</h2>
                {result.civic_address}
                <div>
                  {this.state.expanded===i?this.getInfo(result):""}
                </div>
                <FlatButton label="expand" onTouchTap={()=>this.handleExpand(result,i)}/>
            </CardText>
          </Card>);
          }else{
            return ""
          }

      }
    }

      handleUpdate(res){

          var newres= {
            _id:res._id,
            _rev:res._rev,
            date: new Date().toJSON(),
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
            income:this.state.income,
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
                this.updateDoc(newres);
                this.setState({completedOpen:true});

              }
              catch(err){
                this.setState({errorOpen:true});
                console.log("error"+err)
              }

      }

    render() {

        const { getFilteredResources, updateDoc} = this.props;
        var filteredResources = getFilteredResources();
        this.updateDoc=updateDoc;

        return (

         <Tabs
        value={this.state.tab}
        onChange={(value)=>this.tabChange(value)}
      >
        <Tab label="Health-related" value="1">
          <div>
            <div style={{display:'flex', flexDirection:'row', paddingLeft:20, backgroundColor:"#FFFFFF"}}>
              <h2>Results</h2>
              <div style={{padding:15}}>
              </div>
              </div>
          {this.formatFilteredResources(filteredResources)}
        </div>
        </Tab>
        <Tab label="Housing" value="2">
        <div>
          <div style={{display:'flex', flexDirection:'row', paddingLeft:20, backgroundColor:"#FFFFFF"}}>
            <h2>Results</h2>
            <div style={{padding:15}}>
            </div>
            </div>
        {this.formatFilteredResources(filteredResources)}
      </div>
        </Tab>
        <Tab label="Food" value="3">

        </Tab>
        <Tab label="Other" value="4">

        </Tab>
      </Tabs>

        );
    }
}
