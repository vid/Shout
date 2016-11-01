import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

const style = {
 position: 'fixed',
  padding:'70px 5px 15px',
  width: '20%',
  height: '100%',
};


export default class LeftMenu extends React.Component {
    constructor() {
        super()
    }
    render(){
        return(
        <div id='menu'>
           <Paper zDepth={1} style={style}>
           
            <MenuItem primaryText="New Search" />
            <MenuItem primaryText="Add New Resource" />
            <MenuItem primaryText="Change Location" />

            <MenuItem primaryText="About" />
            <MenuItem primaryText="Invite friends" />
          
          </Paper>
            </div>
      )
    }
}