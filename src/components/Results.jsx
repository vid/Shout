/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const styles = {
  headerStyle: {
  fontColor:'black'
  },

  addResButton:{
  padding:7,
  margin:4
  }
}
export default class Results extends React.Component {

calculateDistance(result){
  if(result&&result.lat&&result.lng){
  var y_distance=69*Math.pow((result.lat-33.7490),2);
  var x_distance=69*Math.pow((-84.3880-result.lng),2);
  var distance=Math.round(100*Math.sqrt(x_distance+y_distance))/100;

  return distance;
  }
  else return "?";
}

formatTags(arrTags){

console.log("Tags to format are:"+arrTags);
  if(arrTags){
    var arrLabels=[];
    arrTags.forEach(function(element) {
        arrLabels.push(element.label);
    });
  return arrLabels.join(', ');
  }

  return "No tags yet";

}

  render () {

    const {getFilteredResources, displayResult, getTags, displayAddResource} = this.props;
    const filteredResources = getFilteredResources();
    return (
      <Table
        selectable={false}
        onCellClick={(rowNumber, columnID) => displayResult(filteredResources[rowNumber])}>
        <TableHeader displaySelectAll={false}>
          <TableRow style={styles.headerStyle}>
            <TableHeaderColumn><h2>Distance</h2></TableHeaderColumn>
            <TableHeaderColumn><h2>Name</h2></TableHeaderColumn>
            <TableHeaderColumn><h2>Tags</h2></TableHeaderColumn>
            <RaisedButton style = {styles.addResButton} onTouchTap={() => displayAddResource()}> <ContentAdd /></RaisedButton>
          </TableRow>
        </TableHeader>
        <TableBody
          stripedRows={true}
          displayRowCheckbox={false}
          showRowHover={true}>
          {filteredResources.map((result, i) => (
            <TableRow key={i} onClick={() => displayResult()}>
              <TableRowColumn>{this.calculateDistance(result)+" mi"}</TableRowColumn>
              <TableRowColumn style={styles.namesectionStyle}><h3>{(i+1)+".  "+result.name}</h3> {result.civic_address}</TableRowColumn>
              <TableRowColumn style={styles.addresssectionStyle}>

              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
