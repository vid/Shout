/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const styles = {
    tableHeader: {
        fontColor: 'black'
    },

    addResButton: {
        margin: 4,
        radius: 52,
    }
}
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

    formatFilteredResources(filteredResources, hoveredRowIndex, searchstring){

    if(filteredResources.length>0){

      return (<TableBody
          stripedRows={true}
          displayRowCheckbox={false}
          showRowHover={true}>
          {filteredResources.map((result, i) => (
            <TableRow
              key={i}
              onClick={() => displayResult()}
              selected={i===hoveredRowIndex}>
              <TableRowColumn>{this.calculateDistance(result)+" mi"}</TableRowColumn>
              <TableRowColumn style={styles.namesectionStyle}><h3>{(i+1)+".  "+result.name}</h3> {result.civic_address}</TableRowColumn>
              <TableRowColumn style={styles.addresssectionStyle}>

              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>);
      }
      else {
      return (<TableBody
          displayRowCheckbox={false}
          showRowHover={true}>
            <TableRow>
              <TableRowColumn><h1>No results for search "{searchstring}"</h1></TableRowColumn>
            </TableRow>
          ))
        </TableBody>);
      }
    }

    render() {

        const { getFilteredResources, displayResult, displaySearch, getTags, displayAddResource, getHoveredRow, getSearchstring } = this.props;
        const filteredResources = getFilteredResources();
        const hoveredRowIndex = getHoveredRow();
        var searchstring=getSearchstring();

        return (
            <Table
        selectable={false}
        fixedHeader={true}
        onCellClick={(rowNumber, columnID) => displayResult(filteredResources[rowNumber])}>
        <TableHeader
          displaySelectAll={false}>
          <TableRow style={styles.tableHeader}>
            <TableHeaderColumn><h2>Distance</h2></TableHeaderColumn>
            <TableHeaderColumn><h2>Name</h2></TableHeaderColumn>
            {/*<TableHeaderColumn><h2>Services</h2></TableHeaderColumn>*/}
            <IconButton style = {styles.addResButton} onTouchTap={() => displayAddResource()} tooltip="add new"> <ContentAdd /></IconButton>
          </TableRow>
        </TableHeader>
        {this.formatFilteredResources(filteredResources, hoveredRowIndex, searchstring)}
      </Table>
        );
    }
}
