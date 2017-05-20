/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
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
}


export default class ModifyDocs extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
              expanded:1
            };

    }

    getInfo(res,i){

      if(this.state.expanded===res.id){

        return "expanded";
      }
    }
//This method returns the filteredResources formatted as a table of results
//If the page has not yet loaded, then it returns a simple message "Loading resources"
    formatFilteredResources(filteredResources){

        if(filteredResources.length>0){

          return filteredResources.map((result, i) =>
              (<Card>
                <CardText>
                <h3>{(i+1)+".  "+result.name}</h3>
                    {result.civic_address}
                    <div>
                      {this.state.expanded===i?"expanded":""}
                    </div>
                    <RaisedButton label="expand" onTouchTap={()=>this.setState({expanded:i})}/>
                </CardText>
              </Card>)
              );
        }
    }

      handleUpdate(){

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
            hours: this.state.hours,
            lat: res.lat,
            lng: res.lng,

            price:this.state.price,
            languages:this.state.languages,
            population:this.state.population,
            waitingtime:this.state.waitingtime,
            services:this.state.services,

            numberreviews:res.numberreviews,
            accessibilityrating:res.accessibilityrating,
            availabilityrating:res.availabilityrating,

            tags:this.state.tags,
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
