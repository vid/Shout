/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

const styles = {

    table: {
      cursor:'pointer'
    },
    dist:{
     color: 'black',
     margin: '12px',
     float:'right',
     backgroundColor: '#F0F8FF',
     border: '1 px solid #000000',
     borderRadius: '8',
     fontSize: '14'
    }
}


export default class Results extends React.Component {

    calculateDistance(result) {
        var userLat = this.props.userLat, userLng = this.props.userLng;

        if (result && result.lat && result.lng) {
            var x_distance = 69 * Math.pow((result.lat - userLat), 2);
            var y_distance = 69 * Math.pow((result.lng - userLng), 2);
            var distance = Math.round(100 * Math.sqrt(x_distance + y_distance)) / 10;

            return distance;
        } else return "N/A";
    }

    formatTags(arrTags) {

        if (arrTags) {
            var arrLabels = [];
            arrTags.forEach(function (element) {
                arrLabels.push(element.label);
            });
            return arrLabels.join(', ');
        }

        return "No tags yet";

    }

//This method returns the filteredResources formatted as a table of results
//If the page has not yet loaded, then it returns a simple message "Loading resources"
    formatFilteredResources(filteredResources, searchstring, pageLoading){

        if(filteredResources.length>0){

          return (

              (filteredResources.map((result, i) => (
                <TableRow
                  key={i}
                  onClick={() => displayResult()}>
                  <TableRowColumn>
                  <div style={{display:'flex',flexDirection:'row'}}><h3>{(i+1)+".  "+result.name}</h3><div style={styles.dist}>({this.calculateDistance(result)+" mi"})</div></div>
                  <div><b>Type: </b>{result.resourcetype+" "}<div style={styles.dist}>({result.numberreviews+" reviews"})</div></div>
                  <b>Address: </b>{result.civic_address}
                  </TableRowColumn>
                </TableRow>
              )))
          );
          }else if(pageLoading){
            return (
                    <TableRow>
                      <TableRowColumn><h1>Loading resources...</h1></TableRowColumn>
                    </TableRow>
                  );
          }
          else {
          return (
                <TableRow>
                  <TableRowColumn><h1>No results for search "{searchstring}"</h1></TableRowColumn>
                </TableRow>
          );
          }
    }

    render() {

        const { getFilteredResources, displayResult, displaySearch, getTags, getPageLoading, displayAddResource, getSearchstring } = this.props;
        var filteredResources = getFilteredResources();
        var pageLoading=getPageLoading();
        var searchstring=getSearchstring();

        return (
        <div id="hide-mobile">
          <div style={{display:'flex', flexDirection:'row', paddingLeft:20, backgroundColor:"#FFFFFF"}}>
            <h2>Results</h2>
            <div style={{padding:15}}>
            <Button
              labelStyle={{fontWeight:'bold'}}
              onTouchTap={()=>displayAddResource()}>
              Add Place
            </Button>
            </div>
            </div>
      <Table
        selectable={false}
        fixedHeader={true}
        style={styles.table}
        onCellClick={(rowNumber, columnID) => displayResult(filteredResources[rowNumber])}>
        <TableBody
            displayRowCheckbox={false}
            showRowHover={true}>
        {this.formatFilteredResources(filteredResources, searchstring, pageLoading)} //Populate results based on the "pageLoading" state boolean that indicates whether or not DB is synced
        </TableBody>
      </Table>
      </div>
        );
    }
}
