/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const styles = {
  headerStyle: {
  fontColor:'black'
  },
}
export default class Results extends React.Component {

  render () {
    const {getFilteredResources, displayResult} = this.props;
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

          </TableRow>
        </TableHeader>
        <TableBody
          stripedRows={true}
          displayRowCheckbox={false}
          showRowHover={true}>
          {filteredResources.map((result, i) => (
            <TableRow key={i} onClick={() => displayResult()}>
              <TableRowColumn>{1.3+"mi"}</TableRowColumn>
              <TableRowColumn style={styles.namesectionStyle}><h3>{result.name}</h3> {result.civic_address}</TableRowColumn>
              <TableRowColumn style={styles.addresssectionStyle}>
                  {result.tags}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
