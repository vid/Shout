/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


export default class Results extends React.Component {

    calculateDistance(result) {
        if (result && result.lat && result.lng) {
            var y_distance = 69 * Math.pow((result.lat - 33.7490), 2);
            var x_distance = 69 * Math.pow((-84.3880 - result.lng), 2);
            var distance = Math.round(100 * Math.sqrt(x_distance + y_distance)) / 100;

            return distance;
        } else return "?";
    }

    formatTags(arrTags) {

        console.log("Tags to format are:" + arrTags);
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
                  <TableRowColumn>{this.calculateDistance(result)+" mi"}</TableRowColumn>
                  <TableRowColumn><h3>{(i+1)+".  "+result.name}</h3> {result.civic_address}</TableRowColumn>
                  <TableRowColumn>

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
            <Table
        selectable={false}
        fixedHeader={true}
        onCellClick={(rowNumber, columnID) => displayResult(filteredResources[rowNumber])}>
        <TableHeader
          displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn><h2>Distance</h2></TableHeaderColumn>
            <TableHeaderColumn><h2>Name</h2></TableHeaderColumn>
            {/*<TableHeaderColumn><h2>Services</h2></TableHeaderColumn>*/}
          </TableRow>
        </TableHeader>
        <TableBody
            stripedRows={true}
            displayRowCheckbox={false}
            showRowHover={true}>
        {this.formatFilteredResources(filteredResources, searchstring, pageLoading)} //Populate results based on the "pageLoading" state boolean that indicates whether or not DB is synced
        </TableBody>
      </Table>
        );
    }
}
