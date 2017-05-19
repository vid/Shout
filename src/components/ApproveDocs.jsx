/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {

    table: {
      cursor:'pointer'
    },
}

export default class ApproveDocs extends React.Component {

  //This method returns the pendingData formatted as a table of results
  //If the page has not yet loaded, then it returns a simple message "Loading resources"
      formatFilteredResources(pendingData){
          if(pendingData.length>0){
            console.log(pendingData)
            return (

                (pendingData.map((result, i) => (
                  <TableRow
                    key={i}>
                    <TableRowColumn>
                    <div style={{display:'flex',flexDirection:'row'}}><h3>{(i+1)+".  "+result.doc.name}</h3></div>
                      {result.civic_address}
                    </TableRowColumn>
                    <TableRowColumn>
                      <RaisedButton label="convert" onTouchTap={()=>this.changeDoc(result)}/>
                    </TableRowColumn>
                  </TableRow>
                )))
            );
            }else {
            return (
                  <TableRow>
                    <TableRowColumn><h1>No results for search</h1></TableRowColumn>
                  </TableRow>
            );
            }
      }

      render() {

        //const { getFilteredResources, changeDoc} = this.props;
          const { container, footer, pendingData} = this.props;
          console.log(pendingData);
          return (
              <div>
                <div style={{display:'flex', flexDirection:'row', paddingLeft:20, backgroundColor:"#FFFFFF"}}>
                  <h2>Results</h2>
                  <div style={{padding:15}}>
                </div>
              </div>
            <Table
              selectable={false}
              fixedHeader={true}
              style={styles.table}>
              <TableBody
                  displayRowCheckbox={false}
                  showRowHover={true}>
              {this.formatFilteredResources(pendingData.rows)}
              </TableBody>
            </Table>
            </div>
          );
      }

}