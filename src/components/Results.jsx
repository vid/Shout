/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class Results extends React.Component {
  render () {
    const {getFilteredResources, displayResult} = this.props;
    const filteredResources = getFilteredResources();
    return (
      <Table selectable={false} onCellClick={(rowNumber, columnID) => displayResult(filteredResources[rowNumber])}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Distance</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {filteredResources.map((result, i) => (
            <TableRow key={i} onClick={() => displayResult()}>
              <TableRowColumn>{1.1}</TableRowColumn>
              <TableRowColumn>{result.name}</TableRowColumn>
              <TableRowColumn>{result.civic_address}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
